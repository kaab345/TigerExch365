import React from 'react';
import './Commission.css';

const Commission = () => {
    return (
        <div className="scrollable padder">
            <div className="panel panel-default">
                <div className="wrapper-content animated fadeInRight">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>
                                <i className="fa fa-caret-right"></i> Yahan par aapko dhikh rha hai ki idhr aapke neeche logo ko 12 match ka commission nahi mila hai.
                                Toh yahan se check kar ke aap unn logo ko commission de sakte hai. Ledger se ya aapas me hissab krke aappki marzi.
                                <br />
                                <i className="fa fa-caret-right"></i> Aur upline se jo commission aapko milna hai wo aapke ledger mai add ho jaayga ya apni upline se bat kijiye.
                            </h5>
                        </div>

                        <div className="dataTables_wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th className="tablelightblue">User ID</th>
                                        <th className="tabledarkblue">Parent Partnership Stake</th>
                                        <th className="tablelightblue">Commission</th>
                                    </tr>
                                </thead>
                                <tbody id="commData"></tbody>
                            </table>
                        </div>

                        <div className="pagination-section">
                            <ul className="pagination" id="paginationList"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commission;
