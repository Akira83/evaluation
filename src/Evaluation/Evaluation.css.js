import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    display: "flex",
    padding: 20,
    margin: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
  },
  wrapperPacient: {
    flex: 0.05,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#c6c6c6",
  },
  pacientInput: {
    color: "#3d3d3d",
    fontSize: 22,
    marginLeft: 10,
  },
  wrapperImages: {
    flex: 0.8,
    display: "flex",
    flexDirection: "row",
  },
  imageOpener: {
    borderWidth: 2
  },
  label: {
    fontSize: 24,
    marginBottom: 12,
  },
  beforeView: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    marginRight: 10,
  },
  afterView: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  actionBtn: {
    marginTop: 20,
  }
});

export { styles };
