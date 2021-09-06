sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/m/MessageToast'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast) {
		"use strict";
        
		return Controller.extend("sap.btp.sapui5.controller.View1", {
			onInit: function () {
                this.outModel = new JSONModel();            
                this.inpModel = new JSONModel();
                // metto la data di oggi dentro l'oggetto per avere come data predefinita quella di oggi
                this.inpModel.setData({"date" : new Date()})
                //setto il modello di input per usare la data predefinita al caricamento
                this.getView().setModel(this.inpModel,"inpModel")
                // ha senso settare il modello di output qui?
                this.getView().setModel(this.outModel,"outModel");    
            },
            onPress: function(){ 
                // modifico la view
                debugger
                let copyInp = {...this.inpModel.getData()}
                
                this.outModel.setData(copyInp)
                console.log(this.outModel.getData())
            },
            elimina: function(){
                    this.outModel.setData()    
            }
            
           
		});
    });
    

