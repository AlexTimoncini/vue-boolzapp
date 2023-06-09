const { createApp } = Vue

createApp({
    data() {
        return {
            contactList: [
                {
                    name: 'Michele',
                    avatar: './assets/avatar_1.jpg',
                    visible: true,
                    about: 'Napoli Nel Cuore',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/avatar_2.jpg',
                    visible: true,
                    about: '- Le patate non sono trattori -',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            triggered: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            triggered: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/avatar_4.jpg',
                    visible: true,
                    about: 'Non mi lavo dal 2019',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/avatar_5.jpg',
                    visible: true,
                    about: 'La vita è come un campo di patate',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/avatar_6.jpg',
                    visible: true,
                    about: 'Daje Macko che in Eul ci arriviamo!',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            triggered: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            triggered: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/avatar_7.jpg',
                    visible: true,
                    about: 'CheckMate!',
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
                    avatar: './assets/avatar_8.jpg',
                    visible: true,
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
                }
            ],
            activeContact: 0,
            newMessage: '',
            lookingFor: false,
            userSearch: '',
            bannerNotification: true,
            triggerMenu: false,
            communitiesBtn: false,
            newChatBtn: false,
            noChatVisible: false,
            triggerFind: false,
            msgSearch: '',
            lookingForMsg: false,
        }
    },
    methods: {
        changeActive(indexActivated){
            this.activeContact = indexActivated;
        },
        enterNewMsg(){
            if (this.newMessage.length > 0){
                let dt = new Date();
                let newMsg = {
                    date: this.doubleDigit(dt.getUTCDate()) + '/' + this.doubleDigit((dt.getMonth() + 1 )) + '/' + dt.getFullYear() + ' ' + this.doubleDigit(dt.getHours()) + ':' + this.doubleDigit(dt.getMinutes()) + ':' + this.doubleDigit(dt.getSeconds()),
                    message: this.newMessage,
                    status: 'sent',
                    triggered: false,
                };
                this.contactList[this.activeContact].messages.push(newMsg);
                this.newMessage = '';
                setTimeout(this.botAnswer, 2000);
            }
        },
        botAnswer(){
            let dt = new Date();
            let newMsg = {
                date: this.doubleDigit(dt.getUTCDate()) + '/' + this.doubleDigit((dt.getMonth() + 1 )) + '/' + dt.getFullYear() + ' ' + this.doubleDigit(dt.getHours()) + ':' + this.doubleDigit(dt.getMinutes()) + ':' + this.doubleDigit(dt.getSeconds()),
                message: 'Daje Roma Daje!!',
                status: 'receive'
            };
            this.contactList[this.activeContact].messages.push(newMsg);
        },
        doubleDigit(number){
            if(number.toString().length < 2){
                number = '0' + number 
            } 
            return number;
        },
        searchingContact(){
            if(this.userSearch.length > 0){
                this.lookingFor = true;
            } else {
                this.lookingFor = false;
            }
        },
        deleteMsgPopUp(messageObject){
            messageObject.triggered = !messageObject.triggered;
        },
        msgPosition(msgIndex){
            let message = document.querySelectorAll('.ivy_msg')[msgIndex]
            if(message.offsetTop < window.innerHeight / 2){
                return true
            }
            return false
        },
        removeMsg(msgIndex, msgList){
            if(msgList.length > 1){
                msgList.splice(msgIndex, 1);
            } else {
                msgList.pop();
            }
        },
        noLastMsg(msgList, contactUser){
            if(msgList.length > 0){
                return contactUser.messages[msgList.length - 1].message
            }
            return 'Say Hello For The First Time!';
        },
        noLastDate(msgList, contactUser){
            if(msgList.length > 0){
                return contactUser.messages[msgList.length - 1].date.substring(11,16)
            }
            return '00:00';
        },
        deleteAllMessages(){
            this.contactList[this.activeContact].messages = [];
        },
        deleteChat(){
            this.contactList[this.activeContact].visible = false;
            if (this.contactList.findIndex(contact => contact.visible === true) > -1){
                let found = this.contactList.findIndex(contact => contact.visible === true);
                this.activeContact = found;
            } else if (!(this.contactList.findIndex(contact => contact.name === 'Try Boolzap For The First Time') > -1)){
                this.contactList.push(
                    {
                        name: 'Try Boolzap For The First Time',
                        avatar: './assets/default_avatar.png',
                        visible: true,
                        messages: [
                            {
                                date: '07/06/2023 11:30:55',
                                message: 'Ciao, raccontami una storia!',
                                status: 'received'
                            },
                        ]
                    }
                )
                this.activeContact = this.contactList.length - 1
            } else {
                this.noChatVisible = true;
            }
        },
        startChatting(contactObj, ObjIndex){
            this.newChatBtn = false;
            contactObj.visible = true;
            this.activeContact = ObjIndex;
        },        
        searchingMsg(){
            if(this.msgSearch.length > 0){
                this.lookingForMsg = true;
            } else {
                this.lookingForMsg = false;
            }
        }
    }
}).mount('#app')