/**
 * Created by fisland on 2016/12/17.
 */

$(function () {
    var quoteJSONArray = [
        {
            "auther":"---Dumas pére",
            "quote":"All for one, one for all"
        },
        {
            "auther":"---Charles Dickens",
            "qupte":"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness......"
        },
        {
            "auther":"Socrates",
            "quote":"Other men live to eat, while I eat to live."
        },
        {
            "auther":"Heywood",
            "quote":"A man may lead a horse to the water, but he cannot make it drink."
        },
        {
            "auther":"Balzac",
            "quote":"There is no such thing as a great talent without great will - power. "
        },
        {
            "auther":"Bonaparte Napoleon",
            "quote":"The man who has made up his mind to win will never say 'impossible '."
        }
    ];

    var colorArray = ["#dbf8fe","#ff931c","#b1e7cf","#5f4b70","#3a2524","#60c696","#854228","#ff3300","#062661"];

    $("input[type=button]").click(function () {
        var randomColor =colorArray[Math.floor(Math.random()*colorArray.length + 1) -1];
        var randomQuote = quoteJSONArray[Math.floor(Math.random()*quoteJSONArray.length+1)-1];
        $("body").animate({
            backgroundColor:randomColor
        });
        $(".quote-wrap").animate({
            color:randomColor
        });
        $(".button").animate({
            backgroundColor:randomColor
        });
        $(".content").html(randomQuote.quote);
        $(".author").html(randomQuote.auther);
    });
});