import { BiEditAlt } from "react-icons/bi";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_MEMBER } from "../../redux/crudReducer";
import { FORM_EDIT } from "../../redux/crudReducer";
import Link from "next/link";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Row } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default function FormInput() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const { adventure } = useSelector((state) => ({ ...state }));

  const filterAllMember = adventure.Member.filter((member) => {
    return member.fullname.includes(searchText);
  });

  const allMember = filterAllMember.map((member, i) => {
    let result = member.status;
    switch (result) {
      case "Alive":
        result = <span className="badge rounded-pill bg-success">Alive</span>;
        break;
      case "Dead":
        result = <span className="badge rounded-pill bg-danger">Dead</span>;
        break;
      case "Missing":
        result = <span className="badge rounded-pill bg-warning">Missing</span>;
    }
    return (
      <tr key={i} style={{ backgroundColor: "#542819" }}>
        <td className="align-middle text-center text-white border-0 ">
          <div style={{ width: "100px", margin: "0 auto" }}>{member.avar}</div>
        </td>
        <td className="align-middle text-center text-white border-0">
          {member.fullname}
        </td>
        <td className="align-middle text-center text-white border-0">
          {member.job}
        </td>
        <td className="align-middle text-center text-white  border-0">
          {member.rank}
        </td>
        <td className="align-middle text-center text-white  border-0">
          {member.totalAge}
        </td>
        <td className="align-middle text-center text-white  border-0">
          {result}
        </td>
        <td className="align-middle text-center text-white  border-0 p-0">
          <Link href="#" onClick={() => dispatch(FORM_EDIT(member))}>
            <BiEditAlt size={30} color="#f0d67a" />
          </Link>
          &ensp;
          <Link href="#" onClick={() => dispatch(DELETE_MEMBER(member))}>
            <FaWindowClose size={25} color="#ff2200" />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      
      <div className=" mb-3">
        <div className="searchend">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name="Search"
              placeholder="Search..."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <a href="#" className="search_icon">
              <GoSearch size={25} color="#111" />
            </a>
          </div>
        </div>
      </div>
     
      <Row>
        <Table className="striped hover  border-0">
          <thead>
            <tr className="text-center " style={{ backgroundColor: "#F8C015" }}>
              <th>Avatar</th>
              <th>Name</th>
              <th>Job</th>
              <th>Rank</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{allMember}</tbody>
        </Table>
      </Row>
    </div>
  );
}
