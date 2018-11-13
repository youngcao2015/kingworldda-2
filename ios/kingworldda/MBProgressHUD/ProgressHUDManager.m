//
//  RCTProgressHUD.m
//  OAWork
//
//  Created by cy on 2017/9/25.
//  Copyright © 2017年 JSHT. All rights reserved.
//

#import "ProgressHUDManager.h"
#import "MBProgressHUD+Extension.h"

#import <React/RCTConvert.h>

@interface ProgressHUDManager ()
@property (nonatomic, strong) RCTResponseSenderBlock callback;
@end

static MBProgressHUD *progressHUD_;

@implementation ProgressHUDManager

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE();

/** 移除HUD */
RCT_EXPORT_METHOD(removeHUD) {
    
    [MBProgressHUD removeHUD];
}


/*********************** 文本提示 ***************************/

/** 在整个窗口上显示详细信息 interval 秒 后移除 */
RCT_EXPORT_METHOD(showMessage:(NSString *)message interval:(NSUInteger)interval) {
    
//    int duration = [RCTConvert int:interval];
    [MBProgressHUD showMessage:message interval:interval];
}

/** 成功信息提示 */
RCT_EXPORT_METHOD(showSuccess:(NSString *)success) {
    
    [MBProgressHUD showSuccess:success];
}

/** 错误信息提示 */
RCT_EXPORT_METHOD(showError:(NSString *)error) {
    
    [MBProgressHUD showError:error];
}


/*********************** 菊花提示 ***************************/

RCT_EXPORT_METHOD(showIndeterminate) {
    
    [MBProgressHUD showIndeterminate];
}

@end
