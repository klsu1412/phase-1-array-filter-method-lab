// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function(drivers) {return drivers.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(drivers) {
        return drivers.slice(0, name.length) === name});
}

function matchName(drivers, item) {
    return drivers.filter(function(drivers) {
        return drivers.name === item});
}