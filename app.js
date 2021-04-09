const quotes = [
    "You're so much stronger than your excuses",
    "I choose to make the rest of my life, the best of my life",
    "Nothing can dim the light that shines from within",
    "Celebrate your small wins for one day they will be big",
    "Everything you can imagine is real",
    "Do what you feel in your heart to be right",
    "Happiness is not something ready made. It comes from your own actions",
    "Whatever you are, be a good one",
    "Your passion is waiting for your courage to catch up",
    "Magic is believing in yourself. If you can make that happen, you can make anything happen",
    "Greatness only comes before hustle in the dictionary",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    "If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears",
    "Very often, a change of self is needed more than a change of scene",
    "It’s not the load that breaks you down, it’s the way you carry it"


]

function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}