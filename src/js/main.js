const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
];

const colors = {
	animal: 'green',
	vegetable: 'orange',
	user: 'purple',
};

const iconsContainer = document.getElementById('main_container');

printIcons(icons, iconsContainer);

//Functions
function printIcons(array, container) {
	array.forEach((element) => {
		const { type } = element;

		getColors(colors, element, type);

		const { name, prefix, family, color } = element;
		container.innerHTML += `
		<div class="icon">
			<i class="${family} ${prefix + name}" style="color: ${color}"></i>
			<div class="icon__name">${name}</div>
		</div>`;
	});
}

function getColors(colorsObj, targetObj, key) {
	const colorsList = Object.entries(colorsObj);
	console.log(colorsList);

	colorsList.forEach((element) => {
		if (element[0] === key) {
			targetObj.color = element[1];
		}
	});
	return targetObj;
}
