define("kg/editor-plugins/1.1.3/image/dialog-tpl",[],function(i,l,t){t.exports=["<div class='{prefixCls}img-tabs'>","    <div class='{prefixCls}img-tabs-bar ks-clear'>","        <div","                class='{prefixCls}img-tabs-tab-selected {prefixCls}img-tabs-tab'","                hidefocus='hidefocus'>","            <div class='{prefixCls}img-tabs-tab-content'>网络图片</div>","        </div>","        <div","                class='{prefixCls}img-tabs-tab'","                hidefocus='hide","    focus'>","            <div class='{prefixCls}img-tabs-tab-content'>本地上传</div>","        </div>","    </div>","    <div class='{prefixCls}img-tabs-body'>","        <div class='{prefixCls}img-tabs-panel {prefixCls}img-tabs-panel-selected'>","            <label>","        <span class='{prefixCls}image-title'>","        图片地址：","        </span>","                <input","                        data-verify='^(https?:/)?/[^////s]'","                        data-warning='网址格式为：http:// 或 /'","                        class='{prefixCls}img-url {prefixCls}input'","                        style='width:390px;vertical-align:middle;'","                        />","            </label>","        </div>","        <div class='{prefixCls}img-tabs-panel'>","            <form class='{prefixCls}img-upload-form' enctype='multipart/form-data'>","                <p style='zoom:1;'>","                    <input class='{prefixCls}input {prefixCls}img-local-url'","                           readonly='readonly'","                           style='margin-right: 15px;","            vertical-align: middle;","            width: 368px;","            color:#969696;'/>","                    <a","                            style='padding:3px 11px;","            position:absolute;","            left:390px;","            top:0;","            z-index:1;'","                            class='{prefixCls}image-up {prefixCls}button ks-inline-block'>浏览...</a>","                </p>","                <div class='{prefixCls}img-up-extraHTML'>","                </div>","            </form>","        </div>","    </div>","</div>","<div style='","            padding:0 20px 5px 20px;'>","    <table","            style='width:100%;margin-top:8px;'","            class='{prefixCls}img-setting'>","        <tr>","            <td>","                <label>","                    宽度：","                </label>","                <input","                        data-verify='^(自动|((?!0$)////d+))?$'","                        data-warning='宽度请输入正整数'","                        class='{prefixCls}img-width {prefixCls}input'","                        style='vertical-align:middle;width:60px'","                        /> 像素","            </td>","            <td>","                <label>","                    高度：","                    <label>","                        <input","                                data-verify='^(自动|((?!0$)////d+))?$'","                                data-warning='高度请输入正整数'","                                class='{prefixCls}img-height {prefixCls}input'","                                style='vertical-align:middle;width:60px'","                                /> 像素 </label>","                    <input","                            type='checkbox'","                            class='{prefixCls}img-ratio'","                            style='vertical-align:middle;margin-left:5px;'","                            checked='checked'/>","                    锁定高宽比","                </label>","            </td>","        </tr>","        <tr>","            <td>","                <label>","                    对齐：","                </label>","                <select class='{prefixCls}img-align' title='对齐'>","                    <option value='none'>无</option>","                    <option value='left'>左对齐</option>","                    <option value='right'>右对齐</option>","                </select>","            </td>","            <td><label>","                间距：","            </label>","                <input","                        data-verify='^////d+$'","                        data-warning='间距请输入非负整数'","                        class='{prefixCls}img-margin {prefixCls}input'","                        style='width:60px'/> 像素","            </td>","        </tr>","        <tr>","            <td colspan='2' style='padding-top: 6px'>","                <label>","                    链接网址：","                </label>","                <input","                        class='{prefixCls}img-link {prefixCls}input'","                        style='width:235px;vertical-align:middle;'","                        data-verify='^(?:(?:////s*)|(?:https?://[^////s]+)|(?:#.+))$'","                        data-warning='请输入合适的网址格式'","                        />","                <label>","                    <input","                            class='{prefixCls}img-link-blank'","                            style='vertical-align:middle;","                margin-left:5px;'","                            type='checkbox'/>","                    &nbsp; 在新窗口打开链接","                </label>","            </td>","        </tr>","    </table>","</div>"].join("")});