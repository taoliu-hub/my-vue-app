/* eslint-disable */
function checkUserPermissions(section) {
    // const userHasPermission = false;
    // return userHasPermission;
    const menuPermissions = {
      Favortites: true,
      Home: true,
      About: false,
      '':false
    }
    console.log(`section: ${section}`);
    // console.log(menuPermissions[section]);
    return menuPermissions[section];
}

export default {
  bind: (element, binding) => {
    const {arg, modifier} = binding;

    console.log('argunment: ', arg);
    console.log('modifier: ', modifier);

    if (!checkUserPermissions(arg)) {
        element.style.display = 'none';
    }
  }
}
