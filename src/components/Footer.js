
export default function Footer() {
    const footerStyle = {
        position: "absolute",
        bottom: "1rem",
        width: "100%",
        height: "2.5rem"
    };

    
    return (
        <div className="footer" style={footerStyle}>
            <p>Created by <a href="https://github.com/anelcanto">Anel Canto</a></p>
        </div>
    );
}