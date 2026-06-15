const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log(process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const generateScoutReport = async (req, res) => {

    const {
        position,
        goals,
        assists,
        speed,
        stamina
    } = req.body;

    let strengths = [];
    let weaknesses = [];

    let rating = 0;

    rating += goals * 2;
    rating += assists * 2;
    rating += speed;
    rating += stamina;

    rating = Math.min(100, rating);

    if (speed >= 80)
        strengths.push("Excellent Pace");
    else
        weaknesses.push("Needs Speed Training");

    if (stamina >= 80)
        strengths.push("High Stamina");
    else
        weaknesses.push("Needs Endurance Training");

    if (goals >= 10)
        strengths.push("Strong Finishing");
    else
        weaknesses.push("Needs Finishing Practice");

    let potential = "Low";

    if (rating >= 80)
        potential = "High";
    else if (rating >= 60)
        potential = "Medium";

    res.json({
        overallRating: rating,
        potential,
        strengths,
        weaknesses,
        recommendedPosition: position,
        scoutingSummary:
            `${position} with strong athletic ability and attacking contribution.`,
        trainingAdvice:
            "Focus on decision making, positioning and technical consistency."
    });
};

module.exports = {
    generateScoutReport
};