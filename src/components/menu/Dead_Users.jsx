import React, { useState, useEffect } from 'react';
import './Dead_Users.css';

const Dead_Users = () => {
  const [userType, setUserType] = useState('-1');
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Simulating data fetch on user type change
  useEffect(() => {
    if (userType !== '-1') {
      // In a real app, you would fetch data from an API
      fetchUserData(userType);
    } else {
      setUserData([]);
    }
  }, [userType]);

  const fetchUserData = (type) => {
    // Simulating API response
    // In a real application, replace this with actual API calls
    const mockData = [];
    setUserData(mockData);
    setTotalPages(Math.ceil(mockData.length / 10));
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <section className="scrollable padder">
      <ul className="breadcrumb no-border no-radius b-b b-light pull-in">
        {/* Dead Master heading and breadcrumb items removed as requested */}
      </ul>

      <section className="panel panel-default">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-lg-12">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Select Type</h5>
                </div>

                <div className="ibox-content table-responsive">
                  <form
                    acceptCharset="UTF-8"
                    action="/newuser"
                    className="form-horizontal"
                    id="user_form"
                    method="post"
                  >
                    <div className="form-group col-lg-6">
                      <label className="col-sm-3 control-label">Select Type</label>
                      <div className="col-sm-9">
                        <select
                          name="account"
                          className="form-control m-b custom-select"
                          value={userType}
                          onChange={handleUserTypeChange}
                        >
                          <option value="-1">Select UserType</option>
                          <option id="4" value="4" name="SS">Dead SS</option>
                          <option id="5" value="5" name="SA">Dead SA</option>
                          <option id="6" value="6" name="SP">Dead SP</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  <table className="table table-bordered table-striped dataTables-example dataTable no-footer">
                    <thead>
                      <tr>
                        <th className="sorting_disabled tablelightblue">S.No</th>
                        <th className="sorting_disabled tabledarkblue">ID</th>
                        <th className="sorting_disabled tablelightblue">Name</th>
                        <th className="sorting_disabled tabledarkblue">Designation</th>
                        <th className="sorting_disabled tablelightblue">DOB</th>
                        <th className="sorting_disabled tabledarkblue">Action</th>
                      </tr>
                    </thead>
                    <tbody id="userData">
                      {userData.length > 0 ? (
                        userData.map((user, index) => (
                          <tr key={user.id}>
                            <td>{(currentPage - 1) * 10 + index + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.designation}</td>
                            <td>{user.dob}</td>
                            <td>
                              <button className="btn btn-primary btn-sm">Edit</button>
                              <button className="btn btn-danger btn-sm ml-1">Delete</button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="pt-3">
                  <div className="col">
                    <div className="dataTables_paginate paging_simple_numbers float-right">
                      <ul
                        role="menubar"
                        aria-disabled="false"
                        aria-label="Pagination"
                        className="pagination dataTables_paginate paging_simple_numbers my-0 b-pagination justify-content-end"
                        id="paginationList"
                      >
                        {totalPages > 0 && (
                          <>
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                              >
                                Previous
                              </button>
                            </li>
                            {renderPagination()}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                              >
                                Next
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dead_Users;