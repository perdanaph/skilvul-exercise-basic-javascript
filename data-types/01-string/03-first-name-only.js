function firstNameOnly(fullname) {
  return `${fullname.split(' ')[0]} ${fullname.split(' ')[fullname.split(' ').length - 1].charAt(0)}.`;
}

console.log(firstNameOnly('David Wilanda'));
