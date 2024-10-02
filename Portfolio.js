let service_item = document.querySelector(".service_item");
let s_i = document.querySelector(".service_item div div i");
let s_h5 = document.querySelector(".service_item div div h5");
service_item.addEventListener("mouseover",()=>{
	s_i.style.color = "#0d6efd";
	s_i.style.backgroundColor = "white";
	s_i.style.border = "1px solid #0d5efd";
	s_h5.style.color = "#0d6efd";
})
service_item.addEventListener("mouseout",()=>{
	s_i.style.color = "white";
	s_i.style.backgroundColor = "#0d6efd";
	s_h5.style.color = "black";
})