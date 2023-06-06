const regex = /kirat\s*bhaiya\b/i;
const scoldings = [
    "Do I look like your bhaiya? Call me by my name!",
    "Ahem! Bhaiya? Really? I demand to be addressed properly!",
    "Listen up, my dear friend. I'm not your bhaiya. Let's keep it respectful.",
    "Bhaiya? Oh, I see how it is. You're just begging for some epic comebacks!",
    "Calling me bhaiya won't save you from my wicked roasts, just saying!",
    "Bhaiya? That's cute. I prefer being addressed as the Supreme Overlord of Sarcasm.",
    "Bhaiya? Oh boy, you're about to witness the wrath of my savage replies!",
    "Please refrain from calling me bhaiya. I'm a sophisticated savage, after all.",
    "Hey there! Just a friendly reminder: I'm not your bhaiya. Let's keep it chill.",
    "Warning: Addressing me as bhaiya may result in an onslaught of witty banter!",
];

const filterBhaiya = (message) => {
    const match = regex.test(message);
    
    // Get a random scolding
    const randomScolding = scoldings[Math.floor(Math.random() * scoldings.length)];

    console.log(randomScolding);
    console.log(message, match, regex)
    if (match) {
        return randomScolding;
    } else {
        return null;
    }
}
module.exports = filterBhaiya;
