<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee 
                             http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
    <servlet>
        <servlet-name>SlotGameServlet</servlet-name>
        <servlet-class>com.example.SlotGameServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>SlotGameServlet</servlet-name>
        <url-pattern>/slotgame</url-pattern>
    </servlet-mapping>
</web-app>

        return "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "<title>Slot Game</title>" +
                "<style>" +
                "body {" +
                "    background-image: url('https://i.pinimg.com/originals/cf/1b/af/cf1baff79c1869bcfa44a8ff09e0560c.jpg');" +
                "    background-size: cover;" +
                "    font-family: Arial, sans-serif;" +
                "    display: flex;" +
                "    justify-content: center;" +
                "    align-items: center;" +
                "    height: 100vh;" +
                "    margin: 0;" +
                "}" +
                ".slot-game {" +
                "    background-color: rgba(255, 204, 102, 0.9);" +
                "    border: 5px solid #ff9900;" +
                "    padding: 10px;" +
                "    text-align: center;" +
                "    width: 500px;" +
                "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);" +
                "}" +
                ".header {" +
                "    background-color: #ff6600;" +
                "    color: white;" +
                "    padding: 15px;" +
                "    font-size: 28px;" +
                "    font-weight: bold;" +
                "    border-radius: 5px;" +
                "}" +
                ".pay-with {" +
                "    display: flex;" +
                "    justify-content: space-between;" +
                "    margin: 10px 0;" +
                "}" +
                ".pay-with img {" +
                "    height: 30px;" +
                "}" +
                ".grid {" +
                "    display: grid;" +
                "    grid-template-columns: repeat(5, 1fr);" +
                "    gap: 5px;" +
                "    margin: 10px 0;" +
                "}" +
                ".grid img {" +
                "    width: 100%;" +
                "    border-radius: 5px;" +
                "    transition: transform 0.8s ease-in-out;" +
                "}" +
                ".win {" +
                "    background-color: #00ccff;" +
                "    color: #ffcc00;" +
                "    font-size: 26px;" +
                "    font-weight: bold;" +
                "    padding: 10px;" +
                "    border-radius: 5px;" +
                "    margin-top: 15px;" +
                "}" +
                ".play-button {" +
                "    background-color: #ff6600;" +
                "    color: white;" +
                "    font-size: 20px;" +
                "    font-weight: bold;" +
                "    padding: 12px 30px;" +
                "    border: none;" +
                "    border-radius: 5px;" +
                "    cursor: pointer;" +
                "    margin-top: 15px;" +
                "    box-shadow: 0 5px #cc5200;" +
                "}" +
                ".play-button:hover {" +
                "    background-color: #ff3300;" +
                "}" +
                ".play-button:active {" +
                "    transform: translateY(4px);" +
                "    box-shadow: 0 3px #cc5200;" +
                "}" +
                "</style>" +
                "</head>" +
                "<body>" +
                "<div class=\"slot-game\">" +
                "<div class=\"header\">18,000 WAYS TO WIN!</div>" +
                "<div class=\"pay-with\">" +
                "<img src=\"https://via.placeholder.com/100x30?text=Google+Play\" alt=\"Google Play\">" +
                "<img src=\"https://via.placeholder.com/100x30?text=TrueMoney+Wallet\" alt=\"TrueMoney Wallet\">" +
                "</div>" +
                "<div class=\"grid\" id=\"slotGrid\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "<img src=\"https://via.placeholder.com/60?text=Symbol\" alt=\"Symbol\">" +
                "</div>" +
                "<div class=\"win\" id=\"winAmount\">WIN 0.00</div>" +
                "<button class=\"play-button\" onclick=\"spin()\">PLAY</button>" +
                "<script>" +
                "const symbols = [" +
                "\"https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png\"," +
                "\"https://tr.rbxcdn.com/61f1f5263a375b58d7acafc96098d6a2/420/420/Hat/Webp\"," +
                "\"https://ih1.redbubble.net/image.3992713459.2737/st,small,507x507-pad,600x600,f8f8f8.webp\"," +
                "\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqQ0YqFpgHGbiHfvmJhxe8F0g3L5JqMaxJA&s\"," +
                "\"https://us-fbcloud.net/quiz/data/56/56790.image1.jpg\"," +
                "\"https://img1.picmix.com/output/stamp/normal/9/1/6/5/2525619_ae5cf.png\"" +
                "];" +
                "function getRandomSymbol() {" +
                "    return symbols[Math.floor(Math.random() * symbols.length)];" +
                "}" +
                "function spin() {" +
                "    const grid = document.getElementById(\"slotGrid\");" +
                "    const winAmount = document.getElementById(\"winAmount\");" +
                "    let totalWin = 0;" +
                "    for (let i = 0; i < grid.children.length; i++) {" +
                "        const symbol = getRandomSymbol();" +
                "        grid.children[i].classList.add('spin');" +
                "        setTimeout(() => {" +
                "            grid.children[i].src = symbol;" +
                "            grid.children[i].classList.remove('spin');" +
                "            if (symbol.includes(\"Meme_Man\")) {  // Scatter Symbol" +
                "                totalWin += 1000;" +
                "            } else if (symbol.includes(\"Hat\")) {  // Wild Symbol" +
                "                totalWin += 500;" +
                "            } else {" +
                "                totalWin += 100;" +
                "            }" +
                "            if (i === grid.children.length - 1) {" +
                "                winAmount.textContent = `WIN ${totalWin.toFixed(2)}`;" +
                "            }" +
                "        }, i * 200);" +
                "    }" +
                "}" +
                "</script>" +
                "</div>" +
                "</body>" +
                "</html>";
