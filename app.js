function generate() {

    
    var quotes ={
        "- A.P.J.Abdul Kalam" : '"If you want to shine like a sun, first burn like a sun."',
        "- Maya Angelou" :'"The truth is, no one of us can be free until everybody is free."',
        "- Fannie Lou Hamer" : `"Nobody's free until everybody's free."`,
        "- Mahatma Gandhi " :'"You must be the change you wish to see in the world"',
        "- Dr.Seuss" :`"Don't cry because it's over.Smile because it happened."`,
        "- A.P.J.AbdulKalam" : '"You have to dream before your dreams can come true."',
        " — Will Smith" : `"Money and success don't change people; they merely amplify what is already there."`,
        "— Socrates" :  '"The unexamined life is not worth living."',
        "― Dr. A.P.J. Abdul Kalam" : '“You cannot change your future. but you can change your habits. and surely your habits will change your future.”',
        "— Kobe Bryant" : ' "Everything negative , pressure, challenges , is all an opportunity for me to rise." ',
        "— Mahatma Gandhi" :'"Live as if you were to die tomorrow. Learn as if you were to live forever."',
        "— Neil Armstrong " :`"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."` ,
        "― Dr.A.P.J.Abdul Kalam" :'“Never stop fighting until you arrive at your destined place .that is  the unique you. Have an aim in life.continuously acquire knowledge. work hard. and have perseverance to realize the great life.”',
        "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
        "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
        "- Will Rogers": `"Don't Let Yesterday Take Up Too Much Of Today."`,
        "- Unknown": `"You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character."`,
        "- Vince Lombardi": `"It's Not Whether You Get Knocked Down, It's Whether You Get Up."`,
        "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
        "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()* authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML=quote;

    document.getElementById("author").innerHTML=author;


}