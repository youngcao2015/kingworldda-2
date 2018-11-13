//
//  MBProgressHUD+Extension.h
//  ATLife
//
//  Created by 曹阳 on 16/10/11.
//  Copyright © 2016年 Aisino. All rights reserved.
//

#import <MBProgressHUD/MBProgressHUD.h>

@interface MBProgressHUD (Extension)

/** 移除HUD */
+ (void)removeHUD;

/*********************** 文本提示 ***************************/

/** 在视图view上显示信息 */
+ (void)showMessage:(NSString *)message aboveView:(UIView *)view;
/** 在整个窗口上显示详细信息，默认 2 秒 */
+ (void)showMessage:(NSString *)message;
/** 在整个窗口上显示详细信息 interval 秒 后移除 */
+ (void)showMessage:(NSString *)message interval:(NSUInteger)interval;
/** 成功信息提示 */
+ (void)showSuccess:(NSString *)success;
/** 错误信息提示 */
+ (void)showError:(NSString *)error;

/*********************** 菊花提示 ***************************/

+ (void)showIndeterminateAboveView:(UIView *)view;
+ (void)showIndeterminate;
@end

@interface MBProgressHUD (ProgressHUD_2)

/*********************** 文本提示 ***************************/

/** 在视图view上显示信息 */
+ (void)showMessage:(NSString *)message aboveView:(UIView *)view showTime:(CGFloat)time;

/** 在整个窗口上显示详细信息 */
+ (void)showMessage:(NSString *)message showTime:(CGFloat)time;

/** 成功信息提示 */
+ (void)showSuccess:(NSString *)success showTime:(CGFloat)time;

/** 错误信息提示 */
+ (void)showError:(NSString *)erro showTime:(CGFloat)timer;


/*********************** 菊花提示 ***************************/

+ (void)showIndeterminateAboveView:(UIView *)view showTime:(CGFloat)time;
@end
