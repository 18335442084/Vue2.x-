// jsx React 较VUE更加灵活，随时可以写js；但不能在jsx里写css，得额外引用
import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: "N"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}