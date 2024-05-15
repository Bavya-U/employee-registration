import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  deleteUser,
} from "../../Component/EmpRegistration/Action/Action";
import { FaTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./EmpTable.css";

const ReduxTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dt = useRef(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [state, setState] = useState({
    deleteDialogVisible: false,
    deleteSelectedDialogVisible: false,
    deleteTarget: null,
  });
  const [globalSearchText, setGlobalSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEditClick = (id) => {
    navigate(`/form/${id}/edit`);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleDeleteSelected = () => {
    selectedProducts.forEach((user) => {
      dispatch(deleteUser(user.id));
    });
    setSelectedProducts([]);
  };

  const filteredData = users
    ? users.filter((row) => {
        const searchText = globalSearchText.toLowerCase();
        return (
          (row.name && row.name.toLowerCase().includes(searchText)) ||
          (row.email && row.email.toLowerCase().includes(searchText)) ||
          (row.phone && row.phone.toLowerCase().includes(searchText))
        );
      })
    : [];

  const clearGlobalSearch = () => {
    dt.current.reset();
    setGlobalSearchText("");
  };

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };
  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then((autoTable) => {
        const doc = new jsPDF.default();
        doc.autoTable({
          head: [
            [
              "empid",
              "name",
              "lastname",
              "email",
              "phoneNumber",
              "address",
              "jobrole",
              "department",
              "Date of Birth",
              "gender",
            ],
          ],
          body: filteredData.map((row) => [
            row.empid,
            row.name,
            row.lastname,
            row.email,
            row.phoneNumber,
            row.address,
            row.jobrole,
            row.department,
            row.doj,
            row.gender,
          ]),
        });

        doc.save("products.pdf");
      });
    });
  };

  const header = (
    <div className="d-md-flex justify-content-between gap-2">
      <div>
        <h3>Employee Details</h3>
      </div>

      <div className="d-md-flex">
        <div className="my-auto">
          <Button
            onClick={clearGlobalSearch}
            className="pi pi-filter-slash p-button-outlined me-3 p-2"
          >
            <span className="ms-2">Clear</span>
          </Button>
        </div>
        <div className="me-2">
          <span className="p-input-icon-left">
            <i className="" />
            <InputText
              value={globalSearchText}
              onChange={(e) => setGlobalSearchText(e.target.value)}
              placeholder="🔍 Keyword Search"
            />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center col-10 mx-auto  mt-2">
      <div className="d-md-flex border shadow justify-content-between bg-white shadow emptable-div p-3 my-3">
        <div className="d-flex justify-content-center">
          <div>
            <Link to="/empform">
              <Button className="p-button p-button-success  me-2">
                <FaPlus className="me-2" />
                <span>New</span>
              </Button>
            </Link>
          </div>
          <div>
            <Button
              onClick={() =>
                setState({ ...state, deleteSelectedDialogVisible: true })
              }
              className="p-button p-button-danger"
              disabled={!selectedProducts || selectedProducts.length === 0}
            >
              <FaTrashAlt className="me-2" />
              <span>Delete</span>
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2 mt-md-0">
          <Button
            type="button"
            className="mx-1"
            icon="pi pi-file"
            rounded
            onClick={() => exportCSV(false)}
            data-pr-tooltip="CSV"
          />

          <Button
            type="button"
            className="mx-1"
            icon="pi pi-file-pdf"
            severity="warning"
            rounded
            onClick={exportPdf}
            data-pr-tooltip="PDF"
          />
        </div>
      </div>
      <Tooltip target=".export-buttons>button" position="bottom" />

      <div className="datatable">
        <DataTable
          ref={dt}
          value={filteredData}
          paginator
          header={header}
          rows={4}
          className="card shadow mb-5 emptable-data border-0"
          rowsPerPageOptions={[4, 5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          columnResizeMode="expand"
          resizableColumns
          showGridlines
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
          globalFilter={globalSearchText}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column
            field="empid"
            header="Emp Code"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />

          <Column
            field="name"
            header="Full Name"
            body={(rowData) => `${rowData.name} ${rowData.lastname}`}
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "50%" }}
          />
          <Column
            field="email"
            header="Email"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />

          <Column
            field="jobrole"
            header="Role"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />
          <Column
            field="department"
            header="Department"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />
          <Column
            field="doj"
            header="Date Of Birth"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />

          <Column
            field="gender"
            header="Gender"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />
          <Column
            field="phoneNumber"
            header="PhoneNumber"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />
          <Column
            field="address"
            header="Address"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ width: "25%" }}
          />

          <Column
            body={(rowData) => (
              <>
                <div key={rowData.id}></div>
                <Link to={`/form/${rowData.id}/edit`}>
                  <Button
                    onClick={() => handleEditClick(rowData.id)}
                    icon={<FaPencilAlt />}
                    className="p-button p-button-primary mx-2"
                    rounded
                  />
                </Link>
                <Button
                  onClick={() =>
                    setState({
                      ...state,
                      deleteDialogVisible: true,
                      deleteTarget: rowData,
                    })
                  }
                  icon={<FaTrashAlt />}
                  className="p-button p-button-danger"
                  rounded
                />
              </>
            )}
            header="Actions"
          />
        </DataTable>
      </div>

      <Dialog
        visible={state.deleteDialogVisible}
        onHide={() =>
          setState({ ...state, deleteDialogVisible: false, deleteTarget: null })
        }
        header="Confirm Deletion"
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() =>
                setState({
                  ...state,
                  deleteDialogVisible: false,
                  deleteTarget: null,
                })
              }
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-danger"
              onClick={() => {
                handleDelete(state.deleteTarget.id);
                setState({ ...state, deleteDialogVisible: false });
              }}
            />
          </div>
        }
      >
        {state.deleteTarget && (
          <p>
            Are you sure you want to delete the user{" "}
            <strong>{state.deleteTarget.name}</strong>?
          </p>
        )}
      </Dialog>

      <Dialog
        visible={state.deleteSelectedDialogVisible}
        onHide={() =>
          setState({ ...state, deleteSelectedDialogVisible: false })
        }
        header="Confirm Deletion"
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() =>
                setState({ ...state, deleteSelectedDialogVisible: false })
              }
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-danger"
              onClick={() => {
                handleDeleteSelected([]);
                setState({ ...state, deleteSelectedDialogVisible: false });
              }}
            />
          </div>
        }
      >
        <p>Are you sure you want to delete the selected users?</p>
      </Dialog>
    </div>
  );
};

export default ReduxTable;
