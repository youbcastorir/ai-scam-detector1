const API_KEY = "PUT_YOUR_GROQ_API_KEY_HERE";

async function analyzeScam(){
  const input = document.getElementById("userInput").value;
  const url = document.getElementById("urlInput").value;

  const prompt = `Analyze scam risk and return JSON:\n${input}\nURL:${url}`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+API_KEY
    },
    body:JSON.stringify({
      model:"llama-3.3-70b-versatile",
      messages:[{role:"user",content:prompt}]
    })
  });

  const data = await res.json();
  const text = data.choices[0].message.content;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("summary").innerText = text;
}
