
const myJson = JSON.parse(data);
console.log(myJson);

let daily = document.getElementById('but1');
let weekly = document.getElementById('but2');
let monthly = document.getElementById('but3');

//Три кнопки
daily.addEventListener("click", function (){ swap_timeframes_button(daily);});
weekly.addEventListener("click", function (){ swap_timeframes_button(weekly);});
monthly.addEventListener("click", function (){ swap_timeframes_button(monthly);});

function swap_timeframes_button(box) {
	//Обход grid(#)'ов
	for(let i = 0; i < 6; i++){

		let $current = document.querySelector("#grid"+ (i+2) +" > div.block_down.color_down > div.grid1_box_2");
		let current_json = myJson[i].timeframes.daily.current;
		let $previous = document.querySelector("#grid"+ (i+2) +" > div.block_down.color_down > div.grid1_box_2_1");

		if(box.textContent.match(/\w+/) == "Daily"){
			$current.textContent = myJson[i].timeframes.daily.current + "hrs";
			$previous.textContent = "Last Week - "+myJson[i].timeframes.daily.previous + "hrs";
		}
		if(box.textContent.match(/\w+/) == 'Weekly'){
			$current.textContent = myJson[i].timeframes.weekly.current + "hrs";
			$previous.textContent = "Last Week - "+myJson[i].timeframes.weekly.previous + "hrs";
		}
		if(box.textContent.match(/\w+/) == 'Monthly'){
			$current.textContent = myJson[i].timeframes.monthly.current + "hrs";
			$previous.textContent = "Last Week - "+myJson[i].timeframes.monthly.previous + "hrs";
		}
	}
	//изменения классов (чтобы активная кнопка "подсвечивалась")
	let active_elem = document.getElementsByClassName('active');
	document.getElementById(active_elem[0].id).classList.remove('active');
	document.getElementById(box.id).classList.add('active');
}
