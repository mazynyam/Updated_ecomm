import React from 'react'
import './rfq.css'

function RequestForQuotation() {
    return (
        <div id="rfq-quotation" class="rfq-quotation" data-spm="rfq">
            <a href="/" class="title-info">
                    <h2>REQUEST FOR QUOTATION</h2>
                    <span>Special Service</span>
                    <div class="label"></div>
            </a>
            <div class="rfq-content">
                <a class="rfq-banner" data-spm="dbanner" href="//rfq.alibaba.com/rfq.html?tracelog=from_pc_home_banner" style={{background: "url(&quot;https://img.alicdn.com/tfs/TB1RrnvyuT2gK0jSZFvXXXnFXXa-800-375.png&quot;) left top no-repeat;"}}>
                    <h3> Sourcing Marketplace</h3>
                    <span class="banner-link" data-spm="dbanner" href="//rfq.alibaba.com/rfq.html?tracelog=from_pc_home_banner">Learn More</span>
                </a>
                <div class="rfq-form">
                    <div class="form-body" data-spm-anchor-id="a2700.8293689.rfq.i1.500267af5BDj8e">
                        <h3>One Request, Multiple Quotes</h3>
                        <div class="rfq-list"></div>
                        <div class="form-item">
                            <span class="next-input next-large item-input">
                                <input aria-label="Medium" aria-labelledby="J_InputMedium" placeholder="What are you looking for…" height="100%" autocomplete="off" value="" data-spm-anchor-id="a2700.8293689.rfq.i0.500267af5BDj8e"/>
                            </span>
                            </div>
                            <div class="form-item">
                                <span class="next-input next-large item-select">
                                    <input aria-label="Medium" aria-labelledby="J_InputMedium" placeholder="Quantity" height="100%" type="number" autocomplete="off" value="" />
                                </span>
                                <span class="next-select next-select-trigger next-select-single next-large item-category next-inactive next-has-search" aria-haspopup="true">
                                    <span class="next-input next-large next-select-inner">
                                        <span class="next-select-values next-input-text-field"><em>Piece/Pieces</em>
                                            <span class="next-select-trigger-search">
                                                <input aria-valuetext="Piece/Pieces" role="combobox" tabindex="0" height="100%" size="1" autocomplete="off" value="" />
                                                    <span aria-hidden="true">&nbsp;</span>
                                            </span>
                                        </span>
                                        <span class="next-input-control">
                                            <span aria-hidden="true" class="next-select-arrow">
                                                <i class="next-icon next-icon-arrow-down next-medium"></i>
                                        </span>
                                        </span>
                                        </span>
                                        <span class="next-sr-only" aria-live="polite"></span>
                                        </span>
                                        </div>
                                        <div class="form-item">
                                            <a data-spm="dform" href="//rfq.alibaba.com/rfq/profession.htm?rfqName=&amp;quantity=&amp;quantityUnit=Piece/Pieces&amp;tracelog=from_pc_home_form">Request For Quotation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default RequestForQuotation
