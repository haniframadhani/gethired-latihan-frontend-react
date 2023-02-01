// TODO: Uncomment baris kode di bawah ini untuk meng-import gambar logo devcode yang berada di dalam folder assets
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* TODO: Tambahkan gambar logo devcode yang sudah diimport sebelumnya ke dalam properti src pada elemen img di bawah ini */}
      <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
      <div data-cy="devcode-title">
        {/* TODO: Tambahkan elemen heading 1 di bawah ini dengan berisi kalimat I'm ready for the next challenge! */}
        <h1>I'm ready for the next challenge!</h1>
      </div>
    </div>
  );
};
