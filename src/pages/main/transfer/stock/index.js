import './index.css';
function TransferStockPage() {
    return (
        <div className="content-wrap">
            <div className="stock-container container-fulid">
                <div className="row">
                    <div className="col-md-6">
                        <a className="stock" href="/transfer-internal.html">
                            <div className="stock-info">
                                <img src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/9b422c36-6a0d-4854-b242-4e37216739f1" />
                                <div>CHỨNG KHOÁN FPTS</div>
                            </div>
                            <div className="tranfer-detail-icon">
                                <i className="fas fa-chevron-right" />
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a className="stock" href="/transfer-internal.html">
                            <div className="stock-info">
                                <img src="https://ebank.tpb.vn/gateway/api/contentservices/api/contentstream-id/contentRepository/7f0bbf5b-e0fb-466a-9ea5-e0d7f5ed388e" />
                                <div>CHỨNG KHOÁN TPS</div>
                            </div>
                            <div className="tranfer-detail-icon">
                                <i className="fas fa-chevron-right" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferStockPage;