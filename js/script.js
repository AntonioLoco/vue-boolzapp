const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Antonio',
                    avatar: '_8',
                    state: "Ultimo accesso oggi alle 12:00",
                    messages: [],
                }
            ],
            botMessage: [
                "Tutto bene tu?",
                "Se camminassimo solo nelle giornate di sole non raggiungeremmo mai la nostra destinazione.",
                "Ora non è tempo per pensare a ciò che non hai. Pensa a quello che puoi fare con quello che c'è.",
                "La fiducia in se stessi è il primo segreto del successo.",
                "Dai un pesce a una persona e la nutrirai per un giorno; insegna ad una persona come usare internet e non ti scoccerà per settimane.",
                "Potrebbe andar peggio! Potrebbe... piovere!",
                "Stupido è chi lo stupido fa",
                "Vaffanculo! Vaffanculooo! Vi, a, effe, effe, ncuuulooo! Tu, il tuo negozio, la tua villa di merda, mi fai schifo, strooonzo!!! ........... Era occupato.",
                "L’ottimista afferma che viviamo nel migliore dei mondi possibili, il pessimista teme che sia vero.",
                "Due cose sono infinite: l’universo e la stupidità umana, ma non sono sicuro dell’universo."
            ],
            currentChat: 0,
            userMessage: "",
            chatFilter: "",
            popupOpen: false,
            popupError: false,
            newContact: {
                name: '',
                avatar: '',
                state: 'Ultimo accesso alle 12:00',
                messages: []
            }
        }
    },
    methods: {
        addUserMessage(){
            //Prendo il momento in cui invio il messaggio
            let nowDate = dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);

            //Creo un nuovo oggetto con l'ora e il messaggio dell'utente
            const newMessage = {
                date: nowDate,
                message: this.userMessage,
                status: 'sent'
            };

            // Creo il messaggio del bot
            const randomMessage = this.botMessage[this.getRandomNumber(0,this.botMessage.length - 1)];
            const botMessage = {
                date: nowDate,
                message: randomMessage,
                status: 'received'
            };

            //Inserisco il messaggio nell' array di messaggi
            this.contacts[this.currentChat].messages.push(newMessage);
            this.userMessage = "";

            // Scrollo alla fine della chat
            this.$nextTick(() => {
                this.scrollToEnd();
            });

            // Aspetto 1 secondo
            setTimeout(() => {
                // Modifico lo stato del bot in sta scrivendo
                this.contacts[this.currentChat].state = "Sta scrivendo...";

                // Aspetto 3 secondi
                setTimeout(() => {
                    // Pusho il messaggio del bot
                    this.contacts[this.currentChat].messages.push(botMessage);
                    
                    //Scrollo automaticamente alla fine della chat
                    this.$nextTick(() => {
                        this.scrollToEnd();
                    });

                    //Modifico lo stato del bot in Online
                    this.contacts[this.currentChat].state = "Online";

                    // Aspetto 3 secondi
                    setTimeout(() => {
                        //Prendo l'ultimo orario
                        nowDate = dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);

                        //Imposto l'ultimo accesso all'orario preso con nowDate
                        this.contacts[this.currentChat].state = `Ultimo accesso alle ${nowDate.substring(10,16)}`;
                    }, 3000);

                }, 3000);

            }, 1000);
        },
        deleteMessage(index){
            // Elimino l'oggetto messaggio
            this.contacts[this.currentChat].messages.splice(index, 1);
        },
        getRandomNumber(min,max){
            let rndNum =  Math.floor(Math.random() * (max - min + 1) ) + min;
            console.log(rndNum);
            return rndNum;
        },
        deleteAllMessage(){
            if(this.contacts[this.currentChat].messages.length > 0){
                for(let i = this.contacts[this.currentChat].messages.length; i >= 0; i--){
                    this.deleteMessage(i);
                }
            }
        },
        deleteChat(){
            if(this.currentChat === this.contacts.length - 1){
                this.contacts.splice(this.currentChat, 1);
                this.currentChat = this.contacts.length - 1;
            } else{
                this.contacts.splice(this.currentChat, 1);
            }
        },
        addChat(){
            //Rimuovo l'errore nel caso fosse stato segnalato
            this.popupError = false;

            // Controlliamo se i campi sono pieni
            if(this.newContact.name.length > 0 && this.newContact.avatar.length > 0){

                // Pusho il nuovo contatto
                this.contacts.push({...this.newContact});
    
                // Nascondo il popUp
                this.popupOpen = false;
    
            } else {
                //Segnalo l'errore
                this.popupError = true;
            }

            // Svuoto i campi del popUp
            this.newContact.name = "";            
            this.newContact.avatar = "";            
        },
        scrollToEnd(){
            const container = document.querySelector('.main-chat');
            const scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        }
    }
}).mount("#app");
