<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="style.css">
<title>Calculator</title>
<script src="calculation.js"></script>
</head>
<body>
    <div id="calculator">
        <div id="display">

            <div id="history">
                <p id="history_value"></p>
            </div>
        
            <div id="result">
                <p id="result_value"></p>
            </div>
        </div>



        <div id="keyboard">

            <button type="button" class="button" onclick=display(7)>7</button>
            <button type="button" class="button" onclick=display(8)>8</button>
            <button type="button" class="button" onclick=display(9)>9</button>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '+'">&#43</button>
            <br>
            <button type="button" class="button" onclick=display(4)>4</button>
            <button type="button" class="button" onclick=display(5)>5</button>
            <button type="button" class="button" onclick=display(6)>6</button>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '-'">&#8722</button>
            <br>
            <button type="button" class="button" onclick=display(1)>1</button>
            <button type="button" class="button" onclick=display(2)>2</button>
            <button type="button" class="button" onclick=display(3)>3</button>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '/'">&#47</button>
            <br>
            <button type="button" class="button" onclick=allClear()>C</button>
            <button type="button" class="button" onclick=display(0)>0</button>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '*'">&#42</button>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '.'">&#46</button>
            <br>
            <button type="button" class="opbutton" onclick="document.getElementById('history_value').innerHTML = document.getElementById('history_value').innerHTML + '%'">&#37</button>
            <button type="button" class="opbutton" onclick=remLast()>D</button>
            <button type="button" class="opbutton" onclick=brAckets()>()</button>
            <button type="button" class="equalbutton" onclick= evaL()>&#61</button>
            
                
        </div>
    </div>
</body>
</html>
