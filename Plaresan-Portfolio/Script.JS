function sendMessage() {
    let name = document.getElementById("name").name;
    let message = document.getElementById("message").value;

    if (name == ""|| message == "") {
         document.getElementById("result").innerHTML =
         "Please fill in all fields.";
    } else {

        document.getElementById("result").innerHTML =
             " Thank you, " + name "! Your message was sent.";

    }
}
