    
    function checkAge() {
        var age = prompt("Yaşınızı daxil edin:");
        if (age < 18) {
            alert("Siz 18 yaşından kiçiksiniz.!");
        }
    }


    function changeBackgroundColor() {
        var isConfirmed = confirm("Əməliyati Təstiqləyirsiz ?");
        if (isConfirmed) {
            document.body.style.backgroundColor = "black"; // Əgər OK click edilsə, arxa fon qara edilir
        }
    }


    class User {
        constructor(ad, soyad, password) {
            this.ad = ad;
            this.soyad = soyad;
            this.password = password;
        }
    
        fullnameToUpperCaseHTML() {
            var fullname = this.ad + " " + this.soyad;
            var uppercaseFullname = fullname.toUpperCase();
            document.write("<p>" + uppercaseFullname + "</p>");
        }
    }
    
    // Obyekt yaradılır
    var user1 = new User("Seymur", "Ferziyev", "Seymurss");
    
    // fullnameToUpperCaseHTML() metodu çağırılır
    user1.fullnameToUpperCaseHTML();
    