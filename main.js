// // https://api.telegram.org/bot5906733891:AAEv0LiEXmnjyfTF-UAx0EtVFc4y5sY2-js/getUpdates 

// let TOKEN = "5906733891:AAEv0LiEXmnjyfTF-UAx0EtVFc4y5sY2-js"
// let CHAT_ID = "5434896240"
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// let success = document.getElementById("success")

// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     let message = `<b>Зайавка с сайта!<b>\n`
//     message += `<b>Отправитель:</b> ${this.name.value}\n`
//     message += `<b>Номер:</b> ${this.number.value}\n`
//     message += `<b>Почта:</b> ${this.email.value}`
//     console.log(message)
//     axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         parse_mode: "html",
//         text: message
//     }).then((res) => {
//         this.name.value = ""
//         this.number.value = ""
//         this.email.value = ""
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => console.log("Successfully"))
// })
// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     let message = `<b>Заявка с сайта!</b>\n`
//     message += ` <b>Отправител:</b> ${this.name.value}\n`
//     message += `<b>Номер:</b> ${this.number.value}\n`
//     message += ` <b>Почта:</b> ${this.email.value}`
//     console.log(message)
//     axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         parse_mode: "html",
//         text: message
//     }).then((res) => {
//         this.name.value = ""
//         this.number.value = ""
//         this.email.value = ""
//         success.interHtmel=""
//         success.style.display="block"
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => console.log("Successfully"))
// })


let TOKEN = "5906733891:AAEv0LiEXmnjyfTF-UAx0EtVFc4y5sY2-js"
let CHAT_ID = "5434896240"
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`
let success = document.getElementById("success")
// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append("chat_id ", CHAT_ID)
//     formData.append("document", this.document.files[0])
//     console.log("formData>>>", formData);
//     axios.post(URL_API, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     }).then((res) => {
//         this.document.value = ""
//         success.innerHTML = "Собшение отправлено !"
//         success.style.display = "block"
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => console.log("Successfully"))
// })

document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("chat_id", CHAT_ID)
    formData.append("document", this.document.files[0])
    axios.post(URL_API, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        this.document.value = ""
        success.innerHTML = "Сообшения отпраленно!"
        success.style.display = "block"
    }).catch((err) => {
        console.log(err)
    }).finally(() => console.log("Successfully"))
})