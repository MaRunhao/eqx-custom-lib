
export const EqxNewText:string = '7' // 文本组件
export const EqxImage:string = '4'  // 图片组件
export const EqxInteractiveVideo:string = 'o'  // 视频组件
export const EqxDropDownList:string = 'z'  // 下拉列表
export const EqxRadio:string = 'r'    // 单选按钮
export const EqxCheckbox:string = 'c'  // 多选按钮
export const EqxInput:string = '501'  // 输入框
export const EqxText:string = '504'  // 输入框
export const EqxInputPhone:string = '502'  // 手机输入框
export const EqxInputEmail:string = '503'  // 手机输入框
export const EqxInputDate:string = '505'  // 手机输入框


export const EqxScore:string = 'a'  // 给个好评
export const EqxSMS:string = '12'  // 验证码
export const EqxSubmitButton:string = '6'  // 提交按钮

export const EQX_FORM_COMP_TYPE = {
  'EqxInput': EqxInput,
  'EqxText': EqxText,
  'EqxInputPhone': EqxInputPhone,
  'EqxInputEmail': EqxInputEmail,
  'EqxInputDate': EqxInputDate,
  
  'EqxDropDownList': EqxDropDownList,
  'EqxRadio': EqxRadio,
  'EqxCheckbox': EqxCheckbox,

  'EqxScore': EqxScore,
  'EqxSMS': EqxSMS,
  'EqxSubmitButton': EqxSubmitButton
}

// 组件类型映射
export const compType = {
  'EqxNewText': EqxNewText ,
  'EqxImage': EqxImage,
  'EqxInteractiveVideo': EqxInteractiveVideo,
  ...EQX_FORM_COMP_TYPE
}

// 组件$li影响的样式
export const COMP_CONTAINER_STYLES = ['zIndex', 'width', 'height', 'opacity', 'top', 'left', 'transform']
export const COMP_ELEMENT_BOX_STYLES = ['boxShadow', 'border', 'borderColor', 'borderWidth', 
'borderRadius', 'borderStyle', 'textAlign', 'textDecoration', 'padding']