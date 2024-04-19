import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./Modal";



const Tables = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between">
        <p className="table-title">Broken Link Summary</p>
        <div className="d-flex ">
          <p className="table-subTitle titleSpacing">
            Primary Broken Links <b>12</b>{" "}
          </p>
          <p className="table-subTitle">
            Secondary Broken Links <b>8</b>
          </p>
        </div>
      </div>
      <div className="mt-3"></div>
      {/* table section */}
      <Table className="custom-table">
        <thead>
          <tr>
            <th className="text-center">Actions</th>
            <th>SKU GTINS</th>
            <th>Product Names</th>
            <th className="text-center">Primary Broken Links</th>
            <th className="text-center">Secondary Broken Links</th>
          </tr>
        </thead>
        <tbody className="custom-tr">
          <tr className="custom-tr">
            <td className="text-center">
              <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725675</td>
            <td>
              <b>Pamper - Baby Dry Dispers N..</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/amazon.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="amazon logo"
              />
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/amazon.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="amazon logo"
              />
            </td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
            <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725444</td>
            <td>
              <b>Arial - Laundry Products</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/wallamart.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="wallmart logo"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="text-center">
            <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/walgreen.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="walgreen logo"
              />
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/walgreen.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="walgreen logo"
              />
            </td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
            <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/bigbasket.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="bigbasket logo"
              />
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/bigbasket.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="bigbasket logo"
              />
            </td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
            <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/amazon.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="amazon logo"
              />
            </td>
            <td></td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
              <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/wallamart.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="wallamart logo"
              />
            </td>
            <td></td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
              <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/walgreen.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="walgreen logo"
              />
            </td>
            <td></td>
          </tr>
          <tr className="custom-tr">
            <td className="text-center">
              <i
                class="bi bi-pencil-fill"
                onClick={() => setModalShow(true)}
              ></i>
            </td>
            <td>4902430725124</td>
            <td>
              <b>Gillete - Razors, Blades and Men's</b>
            </td>
            <td className="text-center">
              <img
                src={require("../assets/images/bigbasket.png")}
                width="60"
                height="15"
                className="d-inline-block align-top"
                alt="bigbasket logo"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      {/* modal  */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default Tables;
