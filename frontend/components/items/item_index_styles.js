const indexLeftWidth = '18%';
const indexRightWidth = '82%';

const styles = {

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    padding: 40 ,
  },
  main: {
    width: indexRightWidth,
  },
  filterTop : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 0px 0px 45px',
  },
  filterLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: indexLeftWidth,
    minWidth: 140,
    padding: 0,
  },
  gridList: {
    overflowY: 'hidden',
    margin: 20,
    padding: 20
  },
  radioButton: {
    margin: 20,
  },
  toggle: {
    margin: '20px 0px 20px 16px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
  },
  checkbox: {
    margin: '0px 0px 8px 16px'
  },
  checkboxIcon: {
    marginRight: 6,
  },
  radioBtn: {
    margin: '0px 0px 8px 16px',
  },
  radioBtnIcon: {
    marginRight: 6,
  }
};

export default styles;
