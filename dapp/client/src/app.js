
App = {
  web3Provider: null,
  contracts: {},
  // address : "",
  ilosc: 0,
  num_of_graphs: 0,
  num_of_triplets: 0,

  init: async function() {
    return await App.initWeb3();
  },

  initWeb3: async function() {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
    
  },

  initContract: async function() {
    const data = await $.getJSON('src/RDF.json');
    const rdf = new web3.eth.Contract(
      data.abi,
      "0xF5903735bE819fC3c8f9578cA7095702d78811c3"
      );
    rdf.setProvider(App.web3Provider);
    App.contracts.RDF = rdf;
    console.log("Jesc iniacylizacja kontrakta!!!!!!!")
    console.log(App.contracts.RDF);
    // App.getNumberOfTriples();
    // App.getHash();
    // console.log(App.contracts.RDF);
    
    // App.getQuery();
    // return App.markAdopted();
    App.contracts.RDF.events.LogNewProvableQuery({}).on('data', async function(event){
      // App.getNumberOfTriples();
      App.getNumberOfGraphs();
    }).on('error', console.error);
    App.getNumberOfGraphs();
    
    // App.contracts.RDF.methods.GET_RDF_THREE_QUERY().call().then(function(result){
    //   console.log("query = " + result)
    //   // $('#resultAll').text(result);
    // });
    return App.bindEvents();
  },




  bindEvents: function() {
    $(document).on('click', '#button_load_new', App.change_window);
    $(document).on('click', '#load', App.change_window_2);
    $(document).on('click', '.button_1', function(e) {
      // $("textarea").append($.trim($(e.target).text()) + ", ");

      var button = e.target;
      var szablon = button.closest("#szablon");
      var id = parseInt(szablon.querySelector('.id_graf').textContent);
      // console.log(id.textContent);
      $('#all').css('display','none');
      $('#graph').css('display','block');


      App.getGraf(id);

    });
    $(document).on('click', '#wroc', function() {
      $('#all').css('display','block');
      $('#graph').css('display','none');
    });
    $(document).on('click', '.button_2', function(e) {
      // $("textarea").append($.trim($(e.target).text()) + ", ");

      var button = e.target;
      var szablon = button.closest("#szablon");
      var id = parseInt(szablon.querySelector('.id_graf').textContent);
      // console.log(id.textContent);
      $('#all').css('display','none');
      $('#graph_edit').css('display','block');


      App.getGrafForEdit(id);

    });
     $(document).on('click', '#wroc_edit', function() {
      $('#all').css('display','block');
      $('#graph_edit').css('display','none');
      App.num_of_triplets = 0;
    });

     $(document).on('click', '#add_triplet', function() {
      // $('#all').css('display','block');
      // $('#graph_edit').css('display','none');
        var tbody = document.querySelector("#table_of_triplets_edit");
        var template = document.querySelector('#triplet_edit');

        var clone = template.content.cloneNode(true);
        var p = clone.querySelectorAll("p");
        p[0].textContent = App.num_of_triplets++ ;
        // p[1].textContent = " >";
        var input = clone.querySelectorAll("input");

        // var str = words[i].replace('<', '');
        // str = str.replace('>', '');

        // const tmp = str.split(' ',3);

        // input[0].textContent = str;
        // $(input[0]).val(tmp[0]);
        // $(input[1]).val(tmp[1]);
        // $(input[2]).val(tmp[2]);
        tbody.appendChild(clone);
    });

     $(document).on('click', '#save_edit_graph', function() {
     
        
        var triplets = document.querySelectorAll(".new_triplet");
        var new_graph = new Array();
        var words;

        for(var i = 0; i < triplets.length; i++){
            words = triplets[i].querySelectorAll("input");
            if($(words[0]).val() != "" && $(words[1]).val() != "" && $(words[2]).val() != "" ){
                var s ="<" + $(words[0]).val() + " " + $(words[1]).val() + " " + $(words[2]).val() + ">";
                // console.log(s);
                new_graph.push(s);
            }
            
        }
        // console.log(new_graph);

        event.preventDefault();
        web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }
        var account = accounts[0];
        App.contracts.RDF.methods.saveEditGraph(new_graph).send({from: account,gas: 17000000000});
        // return App.markAdopted();
        $('#all').css('display','block');
        $('#graph_edit').css('display','none');
        App.num_of_triplets = 0;
    });


    });

     
  },


  tableGraphs: function(){  
    // var number_of_graphs = parseInt(document.getElementById("number_of_graphs").textContent);
    // App.getNumberOfGraphs();
    console.log("Eto dolzno byc potom - " + App.num_of_graphs);
    // console.log($('#number_of_graphs').());
    for(i = 0; i < App.num_of_graphs; i++){
      // Убеждаемся, что браузер поддерживает тег <template>,
      // проверив наличие атрибута content у элемента template.

      if ('content' in document.createElement('template')) {

        // Находим элемент tbody таблицы
        // и шаблон строки
        var tbody = document.querySelector("#table_of_graph");
        var template = document.querySelector('#productrow');

        // Клонируем новую строку и вставляем её в таблицу
        var clone = template.content.cloneNode(true);
        var span = clone.querySelectorAll("span");
        // var button = clone.querySelectorAll("span");
        span[0].textContent = i;
        // p[0].textContent = "Stuff";

        tbody.appendChild(clone);

        // // Клонируем новую строку ещё раз и вставляем её в таблицу
        // var clone2 = template.content.cloneNode(true);
        // p = clone2.querySelectorAll("p");
        // td[0].textContent = "0384928528";
        // td[1].textContent = "Acme Kidney Beans 2";

        // tbody.appendChild(clone2);

      } else {
        // Иной способ заполнить таблицу, потому что
        // HTML-элемент template не поддерживается.
      }
    }
  },

  addRoadIntableGraphs: function(id){
    if ('content' in document.createElement('template')) {

        // Находим элемент tbody таблицы
        // и шаблон строки
        var tbody = document.querySelector("#table_of_graph");
        var template = document.querySelector('#productrow');

        // Клонируем новую строку и вставляем её в таблицу
        var clone = template.content.cloneNode(true);
        var span = clone.querySelectorAll("span");
        span[0].textContent = id;
        // p[0].textContent = "Stuff";

        tbody.appendChild(clone);

        // // Клонируем новую строку ещё раз и вставляем её в таблицу
        // var clone2 = template.content.cloneNode(true);
        // p = clone2.querySelectorAll("p");
        // td[0].textContent = "0384928528";
        // td[1].textContent = "Acme Kidney Beans 2";

        // tbody.appendChild(clone2);

      } else {
        // Иной способ заполнить таблицу, потому что
        // HTML-элемент template не поддерживается.
      }
  },

  change_window: function(){
    $('#background').css("display", "block");
    $('#window').css("display", "block");
  },

  change_window_2: function(){
    $('#background').css("display", "none");
    $('#window').css("display", "none");
    App.loadGraph();
  },

  // split: function() {
  //   web3.eth.getAccounts(function(error, accounts) {
  //     if (error) {
  //       console.log(error);
  //     }
  //     var account = accounts[0];
  //     App.contracts.RDF.methods.parseGraph().send({from: account,gas: 1700000000}).then(function(){
  //       App.getNumberOfTriples();
  //     App.getHash();
  //   });

  //   });

    
  // },

  getResult: function() {
    App.contracts.RDF.methods.result().call().then(function(result){
      console.log("Result: ");
      console.log(result);
    });
  },

  getNumberOfGraphs: function() {
    App.contracts.RDF.methods.grafCounter().call().then(function(result){
      if(App.num_of_graphs == 0){
          App.num_of_graphs = parseInt(result);
      $('#number_of_graphs').text(App.num_of_graphs);
      App.tableGraphs();
      }
      else{
        App.num_of_graphs = parseInt(result);
        $('#number_of_graphs').text(App.num_of_graphs);
        App.addRoadIntableGraphs(App.num_of_graphs-1);
      }
      
    }); 
  },


  all: function() {
    App.contracts.RDF.methods.result().call().then(function(result){
      
      $('#all123').text(result);
    });
    // App.contracts.RDF.methods.wordCounter().call().then(function(result){
    //   console.log("number = " + result)
    //   $('#number').text(result);
    // });

    
  },

  loadGraph: function() {
    str = $("#adres").val()
    event.preventDefault();
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.RDF.methods.loadGraph(str).send({from: account,gas: 3e6});
      // return App.markAdopted();

    });
  },

  refreshData: function() {
    App.getNumberOfTriples();
    App.getHash();
  },

  getIndex: function(){
    index = parseInt($("#index").val());
    event.preventDefault();
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.RDF.methods.writeTriple(index).send({from: account,gas: 3e6});
      // return App.markAdopted();

    });
    // App.contracts.RDF.methods.getTr(index).call().then(function(result){
    //   console.log("index " + index + " = " + result)
    //   $('#text_index').text(result);
    // });
  },

  setAddress: function(){
    address = $("#options").val();
    $('#account').text(address);
    $('.select').removeClass("active");
    $('.send').addClass("active");
    return App.initContract();
  },

  markAdopted: function() {
    console.log("-------------Wyswietlianie danych----------------");
    // App.contracts.RDF.methods.getGraf().call().then(function(result){
    //   console.log("result = " + result)
    //   $('#resultAll').text(result);
    // });

    App.getNumberOfTriples();

    var ilosc = parseInt($('#number').text());

    var triplets = $('#triplets');
    var triplet = $('.tr');

    for(i = 0; i < ilosc;i++){
      App.contracts.RDF.methods.getTriplen(i).call().then(function(result){

        tmp = $('#resultAll').text();
        console.log(result.index + ": " + result.triplet);
    
        $('#resultAll').text(tmp  + result.index + ": " + result.triplet + "\n");
      });
    }
    // App.contracts.RDF.methods.triplets.call().then(function(result){
    //   console.log("result = " + result)
    //   $('#resultAll').text(result);
    // });
    // App.contracts.RDF.methods.wordCounter().call().then(function(result){
    //   console.log("number = " + result)
    //   $('#number').text(result);
    // });

    
  },

  getNumberOfTriples: function() {
    console.log("-------------Get number of triplet----------------");
    App.contracts.RDF.methods.numberOfTriples().call().then(function(result){
      console.log("number of triples = " + result);
      $('#number').text(result);
    });
  },

  getGraf: function(id) {
    // console.log("1");
    $('#table_of_triplets').html("");
    $('#text_graph').text("");
    // index = parseInt($("#index2").val());
    // var indexOfTriplet = parseInt($("#index2").val());
    // console.log("-------------Wyswietl trujke----------------");
    $('#id_grafu').text(id);
    // console.log("Id = " + id);
    App.contracts.RDF.methods.getGraf(id).call().then(function(result){
      // console.log(result);
      // $('#text_graph').text(result);
      // console.log("niet");
      // console.log(result);
      // App.split(result);

      const words = result;


      for(var i = 0; i < words.length;i ++){
        
        var tbody = document.querySelector("#table_of_triplets");
        var template = document.querySelector('#triplet');

        var clone = template.content.cloneNode(true);
        var p = clone.querySelectorAll("p");

        var str = words[i].replace('<', '');
        str = str.replace('>', '');

        const tmp = str.split(' ',3);

        // p[0].textContent = i + ". " + words[i];
        p[0].textContent = i;
        p[1].textContent = tmp[0];
        p[2].textContent = tmp[1];
        p[3].textContent = tmp[2];
        tbody.appendChild(clone);

      }
    });
    // console.log("2");

    
  },

  getGrafForEdit: function(id) {
    $('#table_of_triplets_edit').html("");
    $('#text_graph_edit').text("");
    // index = parseInt($("#index2").val());
    // var indexOfTriplet = parseInt($("#index2").val());
    // console.log("-------------Wyswietl trujke----------------");
    $('#id_grafu_edit').text(id);
    console.log(id);
    App.contracts.RDF.methods.getGraf(id).call().then(function(result){
      // console.log(result);
      // $('#text_graph').text(result);
      // console.log("niet");
      // console.log(result);
      // App.split(result);

      const words = result;
      App.num_of_triplets = words.length;
      for(var i = 0; i < words.length;i ++){
        
        var tbody = document.querySelector("#table_of_triplets_edit");
        var template = document.querySelector('#triplet_edit');

        var clone = template.content.cloneNode(true);
        var p = clone.querySelectorAll("p");
        p[0].textContent = i;  //+ ". <";
        // p[1].textContent = " >";
        var input = clone.querySelectorAll("input");

        var str = words[i].replace('<', '');
        str = str.replace('>', '');

        const tmp = str.split(' ',3);

        // input[0].textContent = str;
        $(input[0]).val(tmp[0]);
        $(input[1]).val(tmp[1]);
        $(input[2]).val(tmp[2]);
        tbody.appendChild(clone);

      }
    });

    
  },

  split: function(str){
   
    const words = str.split('>');
    for(var i = 0; i < words.length;i ++){
      if(i != words.length){
        words[i] = words[i] + ">";
      }
      
      var tbody = document.querySelector("#table_of_triplets");
      var template = document.querySelector('#triplet');


      var clone = template.content.cloneNode(true);
      var p = clone.querySelectorAll("p");
      p[0].textContent = words[i];
      tbody.appendChild(clone);

    }
    // console.log(words);
    // $('#text_graph').text(words);
  },

  getHash: function() {
    console.log("-------------Get hash----------------");
    App.contracts.RDF.methods.calculateiHash().call().then(function(result){
      console.log("hash = " + result);
      $('#hash').text(result);
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});

