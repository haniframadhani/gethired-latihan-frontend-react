// TODO: Uncomment baris kode di bawah untuk meng-import komponen ContactItem
import ContactItem from "../../components/ContactItem";

import InputContactForm from "../../components/InputContactForm";
import "../../assets/styles/style.css";

// TODO: Uncomment baris kode di bawah ini untuk meng-import useState dan useEffect dari React
import { useEffect, useState } from "react";

import getAllContactsData from "../../services"

const ContactManager = () => {
  // TODO: Uncomment baris kode di bawah untuk membuat state variable baru yang digunakan untuk menyimpan data kontak dari API
  const [contactsData, setContactsData] = useState([]);

  // TODO: Uncomment baris kode di bawah ini untuk membuat fungsi handleGetContactsData yang akan men-dispatch fungsi mengambil data kontak dari api yang sudah dibuat sebelumnya di services/index.js dan menyimpan data kontak ke dalam variabel contactsData
  const handleGetContactsData = async () => {
    const res = await getAllContactsData();
    setContactsData(res?.data?.data);
  };

  // TODO: Uncomment baris kode di bawah ini untuk memanggil fungsi handleGetContactsData setelah halaman contacts selesai dirender
  useEffect(() => {
    handleGetContactsData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <InputContactForm />
        <div className="contact-list__container">
          {/* TODO: Uncomment baris kode di bawah ini untuk menampilkan komponen ContactItem yang berisi data kontak sesuai dengan jumlah data kontak yang didapat dari API */}
          <>
            {contactsData && contactsData?.length > 0
              ? contactsData.map((contact, key) => (
                <ContactItem
                  key={key}
                  id={contact?.id}
                  full_name={contact?.full_name}
                  phone_number={contact?.phone_number}
                  email={contact?.email}
                />
              ))
              : ""}
          </>
        </div>
      </div>
    </div>
  );
};

export default ContactManager;
