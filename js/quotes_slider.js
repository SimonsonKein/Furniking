
let itemsCount = document.querySelectorAll(".quotes_item").length
let posActiveItem = 3, posLeftItem, posRightItem
let oldPosActive, oldPosLeftActive, oldPosRightActive

initList();

function initList() {
    posLeftItem = getPosition(false);
    posRightItem = getPosition(true);
    addClasses()
}

document.getElementById("left_arrow").onclick = ev => {
    list(false)
}
document.getElementById("right_arrow").onclick = ev => {
    list(true)
}

function list(listToNext) {
    oldPosActive = posActiveItem
    oldPosLeftActive = posLeftItem
    oldPosRightActive = posRightItem
    posActiveItem = getPosition(listToNext)
    posLeftItem = getPosition(false);
    posRightItem = getPosition(true);
    replaceClasses(listToNext)
}

function replaceClasses(listToNext, itemCount) {
    if (itemCount === 1) {

    } else if (itemsCount === 2) {

    } else if (itemsCount === 3) {
        let i = 0
        let z_indexClassName
        if (listToNext) {
            z_indexClassName = "z_index_min"
        } else {
            z_indexClassName = "z_index_max"
        }
        if (listToNext) {
            document.querySelectorAll(".quotes_item").forEach(function (item) {
                i++
                if (i === posLeftItem) {
                    item.classList.add("z_index_min")
                    item.classList.remove("z_index_max")
                    /*if (item.classList.contains("z_index_min")) {
                        item.classList.remove("z_index_min")
                    } else if (item.classList.contains("z_index_max")) {
                        item.classList.remove("z_index_max")
                    }*/
                    item.classList.replace("slider_left", "slider_right")
                } else if (i === posActiveItem) {
                    if (item.classList.contains("z_index_min")) {
                        item.classList.remove("z_index_min")
                    } else if (item.classList.contains("z_index_max")) {
                        item.classList.remove("z_index_max")
                    }
                } else if (i === posRightItem) {
                    item.classList.remove("z_index_min")
                    item.classList.add("z_index_max")
                }
            })
        }
        if (listToNext) {
            let i = 0
            document.querySelectorAll(".quotes_item").forEach(function (item) {
                i++;
                if (i === oldPosLeftActive) {
                    item.classList.replace("slider_left", "slider_right")
                } else if (i === oldPosActive) {
                    item.classList.replace("slider_active", "slider_left")
                } else if (i === oldPosRightActive) {
                    item.classList.replace("slider_right", "slider_active")
                }
            })
        } else {
            document.querySelectorAll(".quotes_item").forEach(function (item) {
                i++;
                if (i === oldPosLeftActive) {
                    item.classList.replace("slider_left", "slider_active")
                } else if (i === oldPosActive) {
                    item.classList.replace("slider_active", "slider_right")
                } else if (i === oldPosRightActive) {
                    item.classList.replace("slider_right", "slider_left")
                }
            })
        }
    } else if (itemCount > 3) {
        let i = 0
        if (listToNext) {
            document.querySelectorAll(".quotes_item").forEach(function (item) {
                i++;
                if (i === oldPosLeftActive) {
                    item.classList.replace("slider_left", "slider_display_none")
                } else if (i === oldPosActive) {
                    item.classList.replace("slider_active", "slider_left")
                } else if (i === oldPosRightActive) {
                    item.classList.replace("slider_right", "slider_active")
                } else if (i === posRightItem) {
                    item.classList.replace("slider_display_none", "slider_right")
                }
            })
        } else {
            document.querySelectorAll(".quotes_item").forEach(function (item) {
                i++;
                if (i === oldPosLeftActive) {
                    item.classList.replace("slider_left", "slider_active")
                } else if (i === oldPosActive) {
                    item.classList.replace("slider_active", "slider_right")
                } else if (i === oldPosRightActive) {
                    item.classList.replace("slider_right", "slider_display_none")
                } else if (i === posLeftItem) {
                    item.classList.replace("slider_display_none", "slider_left")
                }
            })
        }
    }
}

function addClasses() {
    let i = 0;
    document.querySelectorAll(".quotes_item").forEach(function (item) {
        i++;
        if (i === posLeftItem) {
            item.classList.add("slider_left")
        } else if (i === posActiveItem) {
            item.classList.add("slider_active")
        } else if (i === posRightItem) {
            item.classList.add("slider_right")
        } else {
            item.classList.add("slider_display_none")
        }
    })
}


function getPosition(goNext) {
    let currentPosition = posActiveItem
    if (goNext) {
        if (currentPosition < itemsCount)  {
            return ++currentPosition
        } else {
            return 1;
        }
    } else {
        if (currentPosition > 1) {
            return --currentPosition
        } else {
            return itemsCount;
        }
    }
}
