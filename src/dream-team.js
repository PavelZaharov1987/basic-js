module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    for (let i = 0; i <=members.length-1; i++) {
      if (typeof members[i] === "string") {
        members[i] = members[i].replace(/\s+/g, '').substring(0, 1).toUpperCase();
      } else {
        members[i] = "";
      } 
    }
    if (members.sort().join("") === "") {
      return false;
    } else {
      return members.sort().join("");
    }
  } else {
    return false;
  }
};