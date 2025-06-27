<script setup>
import { ref } from 'vue'

// Form data
const form = ref({
  lastName: '',
  email: '',
  subject: '',
  captcha: ''
})

// Form handlers
const handleSubmit = (event) => {
  // Form submission logic will be implemented here
  console.log('Form submitted:', form.value)
}

const handleReset = () => {
  form.value = {
    lastName: '',
    email: '',
    subject: '',
    captcha: ''
  }
}
</script>

<template>
  <div id='zohoSupportWebToCase' align='center'>
    <form 
      name='zsWebToCase_1148939000000379137' 
      id='zsWebToCase_1148939000000379137' 
      action='https://desk.zoho.com/support/WebToCase' 
      method='POST' 
      @submit.prevent="handleSubmit"
      @reset.prevent="handleReset"
      enctype='multipart/form-data'
    >
      <!-- Hidden Zoho fields - preserved exactly as they appear -->
      <input type='hidden' name='xnQsjsdp' value='edbsnfeb76ea8da9d021fe11006adbc11fa5d' />
      <input type='hidden' name='xmIwtLD' value='edbsn7fc94d202a50ce62921faaea62ba87fb350e2ce7d0c41d3b2be00b28efd48882' />
      <input type='hidden' name='xJdfEaS' value='' />
      <input type='hidden' name='actionType' value='Q2FzZXM=' />
      <input type="hidden" id="property(module)" value="Cases" />
      <input type="hidden" id="dependent_field_values_Cases" value="&#x7b;&#quot;JSON_VALUES&#quot;&#x3a;&#x7b;&#x7d;,&#quot;JSON_SELECT_VALUES&#quot;&#x3a;&#x7b;&#x7d;,&#quot;JSON_MAP_DEP_LABELS&#quot;&#x3a;&#x5b;&#x5d;&#x7d;" />
      <input type='hidden' name='returnURL' value='https&#x3a;&#x2f;&#x2f;docs.taskratchet.com&#x2f;' />
      
      <table border='0' cellspacing='0' class='zsFormClass'>
        <tr>
          <td colspan='2' class='zsFontClass'>
            <strong>Web Form</strong>
          </td>
        </tr>
        <br>
        <tr>
          <td nowrap class='zsFontClass ' width='25%' align='left'>Last Name&nbsp;&nbsp;</td>
          <td align='left' width='75%'>
            <input 
              type='text' 
              maxlength='120' 
              name='Contact Name' 
              class='manfieldbdr'
              v-model="form.lastName"
            />
          </td>
        </tr>
        <tr>
          <td nowrap class='zsFontClass ' width='25%' align='left'>Email&nbsp;&nbsp;</td>
          <td align='left' width='75%'>
            <input 
              type='text' 
              maxlength='120' 
              name='Email' 
              class='manfieldbdr'
              v-model="form.email"
            />
          </td>
        </tr>
        <tr>
          <td nowrap class='zsFontClass ' width='25%' align='left'>Subject&nbsp;&nbsp;</td>
          <td align='left' width='75%'>
            <input 
              type='text' 
              maxlength='255' 
              name='Subject' 
              class='manfieldbdr'
              v-model="form.subject"
            />
          </td>
        </tr>
        <tr>
          <td nowrap class='zsFontClass' width='25%' align='left'>Captcha&nbsp;</td>
          <td>
            <div id='zsCaptchaLoading'>
              <strong>Loading... <br>
                <br>
              </strong>
            </div>
            <div id='zsCaptcha' style='display:none;'>
              <img src='#' id='zsCaptchaUrl' name="zsCaptchaImage">
              <a href='javascript:;' style='color:#00a3fe; cursor:pointer; margin-left:10px; vertical-align:middle;text-decoration: none;' class='zsFontClass' onclick='zsRegenerateCaptcha()'>Refresh</a>
            </div>
            <div>
              <input 
                type='text' 
                name='zsWebFormCaptchaWord'
                v-model="form.captcha"
              />
              <input type='hidden' name='zsCaptchaSrc' value='' />
            </div>
          </td>
        <tr>
          <td style='padding: 11px 5px 0px 5px;' colspan='2' align='center' width='25%'>
            <input type='submit' id="zsSubmitButton_1148939000000379137" class='zsFontClass' value='Submit'> &nbsp; &nbsp; 
            <input type='button' class='zsFontClass' value='Reset' @click="handleReset">
          </td>
        </tr>
        <tr>
          <td width='25%' align='left'></td>
          <td style='padding: 0px 5px;' align='left' width='75%'>
            <div class='wb_FtCon wb_common'>
              <span>powered by </span>
              <a target='_blank' rel='noopener noreferrer' href='https://zoho.com/desk' class='wb_logoCon'>
                <img class='wb_logo' src='https://d1ydxa2xvtn0b5.cloudfront.net/app/images/portalLogo.de847024ebc0131731a3.png' />
              </a>
            </div>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<style scoped>
/* Zoho form styles */
#zohoSupportWebToCase textarea,
#zohoSupportWebToCase input[type='text'],
#zohoSupportWebToCase input[type='date'],
#zohoSupportWebToCase select,
.wb_common {
    width: 280px;
}

#zohoSupportWebToCase td {
    padding: 11px 5px;
}

#zohoSupportWebToCase textarea,
#zohoSupportWebToCase input[type='text'],
#zohoSupportWebToCase input[type='date'],
#zohoSupportWebToCase select {
    border: 1px solid #ddd;
    padding: 3px 5px;
    border-radius: 3px;
}

#zohoSupportWebToCase select {
    box-sizing: unset
}

#zohoSupportWebToCase .wb_selectDate {
    width: auto
}

#zohoSupportWebToCase input.wb_cusInput {
    width: 108px
}

.wb_FtCon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;
    padding-left: 10px
}

.wb_logoCon {
    display: flex;
    margin-left: 5px
}

.wb_logo {
    max-width: 16px;
    max-height: 16px;
}

#zohoSupportWebToCase .wb_multi_pick {
    border: 1px solid #ddd;
    padding: 3px 5px;
    border-radius: 3px;
    width: 280px;
    height: 95px;
    overflow-y: auto;
}

#zohoSupportWebToCase .wb_multi_pick_label {
    display: block;
}

#zohoSupportWebToCase .wb_multi_pick_input,
.wb_multi_pick_input_all {
    vertical-align: middle;
    margin-right: 5px;
}

.zsFormClass {
    background-color: #FFFFFF;
    width: 600px
}

.zsFontClass {
    color: #000000;
    font-family: Arial;
    font-size: 13px
}

.manfieldbdr {
    border-left: 1px solid #ff6448 !important
}

.hleft {
    text-align: left;
}

input[type=file]::-webkit-file-upload-button {
    cursor: pointer;
}

.wtcsepcode {
    margin: 0px 15px;
    color: #aaa;
    float: left;
}

.wtccloudattach {
    float: left;
    color: #00a3fe !important;
    cursor: pointer;
    text-decoration: none !important;
}

.wtccloudattach:hover {
    text-decoration: none !important;
}

.wtcuploadinput {
    cursor: pointer;
    float: left;
    width: 62px;
    margin-top: -20px;
    opacity: 0;
    clear: both;
}

.wtcuploadfile {
    float: left;
    color: #00a3fe;
}

.filenamecls {
    margin-right: 15px;
    float: left;
    margin-top: 5px;
}

.clboth {
    clear: both;
}

#zsFileBrowseAttachments {
    clear: both;
    margin: 5px 0px 10px;
}

.zsFontClass {
    vertical-align: top;
}

#tooltip-zc {
    font: normal 12px Arial, Helvetica, sans-serif;
    line-height: 18px;
    position: absolute;
    padding: 8px;
    margin: 20px 0 0;
    background: #fff;
    border: 1px solid #528dd1;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    color: #eee;
    -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    color: #777
}

.wtcmanfield {
    color: #f00;
    font-size: 16px;
    position: relative;
    top: 2px;
    left: 1px;
}

#zsCloudAttachmentIframe {
    width: 100%;
    height: 100%;
    z-index: 99999 !important;
    position: fixed;
    left: 0px;
    top: 0px;
    border-style: none;
    display: none;
    background-color: #fff;
}

.wtchelpinfo {
    background-position: -246px -485px;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    top: 2px;
    background-image: url(https://d1ydxa2xvtn0b5.cloudfront.net/app/images/zs-mpro.b6c9cf2347c62390fdcb.png);
}

.zsMaxSizeMessage {
    font-size: 13px;
}
</style>
