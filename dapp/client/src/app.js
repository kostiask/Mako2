
App = {
  web3Provider: null,
  contracts: {},
  // address : "",
  ilosc: 0,
  num_of_graphs: 0,
  num_of_triplets: 0,
  address: "<smart-contract-RDF-address>",
  abi:  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "LogNewProvableQuery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "result",
          "type": "string"
        }
      ],
      "name": "LogNewProvableResult",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "grafCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_request",
          "type": "string"
        }
      ],
      "name": "uploadGraph",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_graph",
          "type": "string[]"
        }
      ],
      "name": "saveEditGraph",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getGraf",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getDateTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_date",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "_rdf_terms",
          "type": "string[]"
        }
      ],
      "name": "check_rdf",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  graphForCheck: null,
  idForCheck: null,

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
    web3 = new Web3(App.web3Provider);

    return App.initContract();

  },

  initContract: async function() {
    const rdf = new web3.eth.Contract(
      App.abi,
      App.address
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
    App.contracts.RDF.events.LogNewProvableQuery({}).on('data', async function(event) {
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
    $(document).on('click', '#check', App.checkRdf);
    $(document).on('click', '#load', App.change_window_2);
    $(document).on('click', '.button_1', function(e) {
      var button = e.target;
      var szablon = button.closest("#szablon");
      var id = parseInt(szablon.querySelector('.id_graf').textContent);
      $('#all').css('display', 'none');
      $('#graph').css('display', 'block');
      App.getGraf(id);
    });
    $(document).on('click', '#wroc', function() {
      $('#all').css('display', 'block');
      $('#graph').css('display', 'none');
    });
    $(document).on('click', '.button_2', function(e) {
      var button = e.target;
      var szablon = button.closest("#szablon");
      var id = parseInt(szablon.querySelector('.id_graf').textContent);
      $('#all').css('display', 'none');
      $('#graph_edit').css('display', 'block');
      App.getGrafForEdit(id);
    });
    $(document).on('click', '.button_3', function(e) {
      var button = e.target;
      var szablon = button.closest("#szablon");
      var id = parseInt(szablon.querySelector('.id_graf').textContent);
      $('#all').css('display', 'none');
      $('#graph_check').css('display', 'block');
      App.getGrafCheck(id);
    });
    $(document).on('click', '#wroc_edit', function() {
      $('#all').css('display', 'block');
      $('#graph_edit').css('display', 'none');
      App.num_of_triplets = 0;
    });
    $(document).on('click', '#wroc3', function() {
      $('#all').css('display', 'block');
      $('#graph_check').css('display', 'none');
      App.num_of_triplets = 0;
      App.idForCheck = null;
      App.graphForCheck = null;
      $('#now_check').css('display', 'none');
      $('#result_check').css('display', 'none');
      $('#upload_graf_check').css('display', 'block');
    });

    $(document).on('click', '#add_triplet', function() {
      // $('#all').css('display','block');
      // $('#graph_edit').css('display','none');
      var tbody = document.querySelector("#table_of_triplets_edit");
      var template = document.querySelector('#triplet_edit');

      var clone = template.content.cloneNode(true);
      var p = clone.querySelectorAll("p");
      p[0].textContent = App.num_of_triplets++;
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
      for (var i = 0; i < triplets.length; i++) {
        words = triplets[i].querySelectorAll("input");
        if ($(words[0]).val() != "" && $(words[1]).val() != "" && $(words[2]).val() != "") {
          var s = "<" + $(words[0]).val() + " " + $(words[1]).val() + " " + $(words[2]).val() + ">";
          new_graph.push(s);
        }
      }
      event.preventDefault();
      web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }
        var account = accounts[0];
        App.contracts.RDF.methods.saveEditGraph(new_graph).send({
          from: account,
          gas: 17000000000
        });
        // return App.markAdopted();
        $('#all').css('display', 'block');
        $('#graph_edit').css('display', 'none');
        App.num_of_triplets = 0;
      });
    });
    $(document).on('click', '#upload_graf_check', App.change_window_3);
    $(document).on('click', '#upload_for_check', App.change_window_4);
  },

  checkRdf: function() {

    console.log(typeof(d));
      App.contracts.RDF.methods.check_rdf(App.idForCheck, App.graphForCheck).call().then(function(result){
        console.log("Result: ");
        console.log(result);

        $('#result_check').css('display', 'block');
        if(result == ""){
          $('#result_text').text("No matches");
          $('#kon').css('display', 'none');
        } else {
          var words = result.split(">");
          words.pop();
          $('#ile_t').text(words.length);
          $('#id_main_graph').text(App.idForCheck);
          $('#result_text').text(result);
          $('#kon').css('display', 'block');
        }
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
        var span = clone.querySelectorAll(".id_graf");
        var owner = clone.querySelectorAll(".owner");
        var date = clone.querySelectorAll(".date");
        // var button = clone.querySelectorAll("span");
        span[0].textContent = i;
        // p[0].textContent = "Stuff";
        App.getAddressOwner(i, owner[0]);
        App.getDateTime(i, date[0]);

        // owner[0].textContent = "kostia";

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

  getAddressOwner : function (_id, _span) {
    var ow;
    App.contracts.RDF.methods.getOwner(i).call().then(function(_owner){
      // console.log("hash = " + result);
      console.log(_id + " - " + _owner);
      ow = _owner;
      _span.textContent = _owner;
    });
    return ow;
  },

  getDateTime : function (_id, _span) {
    // var ow;
    App.contracts.RDF.methods.getDateTime(i).call().then(function(_date){
      // console.log("hash = " + result);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var d = new Date(_date*1000);
      // console.log(d.getHours() + ":" + d.getMinutes());
      // console.log(d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear());
      // console.log(_id + " - " + new Date(_date*1000));
      // ow = _date;
      _span.textContent = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    });
    // return ow;
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
        var owner = clone.querySelectorAll(".owner");
        var date = clone.querySelectorAll(".date");
        span[0].textContent = id;

        App.getAddressOwner(i, owner[0]);
        App.getDateTime(i, date[0]);
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

  change_window_3: function(){
    $('#background').css("display", "block");
    $('#window2').css("display", "block");
  },

  change_window_4: function(){
    $('#background').css("display", "none");
    $('#window2').css("display", "none");
    App.uploadForCheck();
  },

  uploadForCheck: function(){
    var str = $('#graf_for_check').val();
    $('#graf_for_check').val("");
    // console.log(f);
    // console.log(1);
    str = str.trim();
    const words = str.split('>');
    words.pop();
    $('#number_of_triplet2').text(words.length);
    for(var i = 0; i < words.length;i ++){
      if(i != words.length){
        words[i] = words[i] + ">";
        words[i] = words[i].replace('\n', '');
      }
    }
    console.log(words);
    App.graphForCheck = words;
    for(var i = 0; i < words.length;i ++){

      var tbody = document.querySelector("#table_of_triplets_check_graf2");
      var template = document.querySelector('#triplet_check');

      var clone = template.content.cloneNode(true);
      var p = clone.querySelectorAll("p");


      var str = words[i].replace('<', '');
      str = str.replace('>', '');

      // const tmp = str.split(' ',3);

      // p[0].textContent = i + ". " + words[i];
      p[0].textContent = i;
      p[1].textContent = str;
      // p[2].textContent = tmp[1];
      // p[3].textContent = tmp[2];
      tbody.appendChild(clone);

    }
    $('#now_check').css('display', 'block');
    $('#upload_graf_check').css('display', 'none');
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

  loadGraph: function() {
    str = $("#adres").val()
    event.preventDefault();
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.RDF.methods.uploadGraph(str).send({from: account,gas: 3e6});
      // return App.markAdopted();

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

  getGrafCheck: function(id) {
    // console.log("1");
    $('#table_of_triplets_check_graf1').html("");
    $('#table_of_triplets_check_graf2').html("");
    $('#text_graph').text("");
    // index = parseInt($("#index2").val());
    // var indexOfTriplet = parseInt($("#index2").val());
    // console.log("-------------Wyswietl trujke----------------");
    $('#id_grafu_check').text(id);
    App.idForCheck = parseInt(id);
    // console.log("Id = " + id);
    App.contracts.RDF.methods.getGraf(id).call().then(function(result){
      // console.log(result);
      // $('#text_graph').text(result);
      // console.log("niet");
      // console.log(result);
      // App.split(result);

      const words = result;
      $('#numer_of_triplet').text(words.length);
      // $('#input1').text(words);
      // $('#input1').val(words);
      for(var i = 0; i < words.length;i ++){

        var tbody = document.querySelector("#table_of_triplets_check_graf1");
        var template = document.querySelector('#triplet_check');

        var clone = template.content.cloneNode(true);
        var p = clone.querySelectorAll("p");


        var str = words[i].replace('<', '');
        str = str.replace('>', '');

        // const tmp = str.split(' ',3);

        // p[0].textContent = i + ". " + words[i];
        p[0].textContent = i;
        p[1].textContent = str;
        // p[2].textContent = tmp[1];
        // p[3].textContent = tmp[2];
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
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
