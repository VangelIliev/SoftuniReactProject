function Footer(){
    const styles = {
        footer: {
            position: "fixed",
            bottom: 0,
            height: 'auto',
            marginTop: "40px",
            width: "100%",
            textAlign: 'center'
          }
    }
    return(
        <footer style={styles.footer}>&copy; Copyright 2022 Vangel Iliev</footer>
    )
}
export default Footer;