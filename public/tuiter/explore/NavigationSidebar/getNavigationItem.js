const getNavigationItem = (item) => {
    if (item.active === true) {
        return (`
        <div class="list-group-item list-group-item-action active wd-nav-active-button-background">
            <a href="${item.href}" class="wd-nav-link-text-active" style="color: white">
                <div class="wd-nav-left-panel-container">
                    <div class="wd-nav-left-panel-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="col-xl-1 d-none d-xl-block">${item.name}</div>
                </div>
            </a>
        </div>
        `)
    } else {
        return (`
<div class="wd-nav-gray-background">
        <div class="list-group-item list-group-item-action wd-nav-gray-background">
            <a href="${item.href}" class="wd-nav-link-text">
                <div class="wd-nav-left-panel-container">
                    <div class="wd-nav-left-panel-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="d-none d-xl-block">${item.name}</div>
                </div>
            </a>
        </div>
</div>
`)
    }
};

export default getNavigationItem;
