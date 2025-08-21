function createTable() {
    //Write your code here
	const rows = prompt("Input number of rows")
	const cols = prompt("Input number of columns")
	const table = document.getElementById("myTable")
	for(let i = 0;i<rows;i++){
		let Roww = document.createElement("tr")
			for(let j = 0;j<cols;j++){
				let Coll = document.createElement("td")
				Coll.innerText = `Row-${i} Column-${j}`
				console.log(Coll.innnerText)
				Roww.appendChild(Coll)
			}
				table.appendChild(Roww)
		}
	
  
}
