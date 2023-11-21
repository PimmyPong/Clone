let objArr = [
	{
		id: 1,
		name: "Victor",
	},
];
const container = document.querySelector("#container");
const select = document.querySelector("select");
function render() {
	select.replaceChildren();
	container.replaceChildren();

	for (let object of objArr) {
		const card = document.createElement("div");
		card.className = "card";

		const nameDog = document.createElement("h2");
		nameDog.textContent = object.name;

		const id = document.createElement("p");
		id.textContent = `ID: ${object.id}`;

		const picture = document.createElement("img");
		picture.src = "./victor.png";

		const button = document.createElement("button");
		button.textContent = "Clone";

		container.appendChild(card);
		card.appendChild(nameDog);
		card.appendChild(id);
		card.appendChild(picture);
		card.appendChild(button);

		button.addEventListener("click", function () {
			let clone = { ...objArr[0] };
			//...push to clone the dog
			objArr.push(clone);
			clone.id = objArr.length;

			render();
		});

		const option = document.createElement("option");
		//.. ID 1,2,3,4,.. will appear int he option box
		option.textContent = object.id;
		//..value of each ID
		option.value = object.id;
		select.appendChild(option);
	}
}
render();

//.....................select

select.addEventListener("change", function (e) {
	//..function"change" is for <select> and value is the event that change
	const chosenId = +e.target.value;

	objArr = objArr.filter((object) => object.id !== chosenId);

	render();
});
