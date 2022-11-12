class Equipamento {

    constructor(){
        this.id = 1;
        this.arrayEquipamentos = [];
    }

    cadastrar(){
        let equipamento = this.lerDados();

        if(this.validarCampos(equipamento)) {
            this.adicionar(equipamento);
        }

        this.listaTabela();
    
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayEquipamentos.length; i++ ) {
             let tr = tbody.insertRow();


             let td_id = tr.insertCell();
             let td_equipamento = tr.insertCell();
             let td_localIstalação = tr.insertCell();
             let td_açoes = tr.insertCell();
             
        }

    }

    adicionar(equipamento) {
        this.arrayEquipamentos.push(equipamento);
        this.id++;
    }


    lerDados(){
        let equipamento = {}

        equipamento.id = this.id;
        equipamento.nomeEquipamento = document.getElementById('equipamento').value;
        equipamento.localInstalação = document.getElementById('localInstalação').value;

        return equipamento;

        }

    validarCampos(equipamento){
        let msg = '';

        if(equipamento.nomeEquipamento == ''){
            msg += '- Informe o nome do Equipamento \n';
        }

        if(equipamento.nomeEquipamento == ''){
            msg += '- Informe o nome do Equipamento \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true
    }

    excluir(){

        
    }    

    }


var equipamento = new Equipamento();