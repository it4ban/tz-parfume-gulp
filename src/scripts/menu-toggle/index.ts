export const menuToggle = (
	menuContainerDOM: string,
	menuItemsDOM: string,
	menuActiveItemDOM: string,
) => {
	const menuContainer = document.querySelector(menuContainerDOM);
	const menuItems = document.querySelectorAll(menuItemsDOM);

	menuItems.forEach((menuItem) => {
		menuItem.addEventListener('click', () => {
			const menuActiveItem = menuActiveItemDOM.slice(1);

			const activeItem = menuContainer?.querySelector(menuActiveItemDOM);
			if (activeItem) {
				activeItem.classList.remove(menuActiveItem);
			}

			menuItem.classList.add(menuActiveItem);
		});
	});
};
