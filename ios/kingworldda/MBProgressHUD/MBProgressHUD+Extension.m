//
//  MBProgressHUD+ProgressHUD.m
//  ATLife
//
//  Created by 曹阳 on 16/10/11.
//  Copyright © 2016年 Aisino. All rights reserved.
//

#import "MBProgressHUD+Extension.h"
#import <objc/runtime.h>

static MBProgressHUD *progressHUD_;

@implementation NSObject (Extension)

+ (void)exchangeInstanceMethod1:(SEL)method1 method2:(SEL)method2
{
    method_exchangeImplementations(class_getInstanceMethod(self, method1), class_getInstanceMethod(self, method2));
}

+ (void)exchangeClassMethod1:(SEL)method1 method2:(SEL)method2
{
    method_exchangeImplementations(class_getClassMethod(self, method1), class_getClassMethod(self, method2));
}

@end

@implementation MBProgressHUD (Extension)

+ (void)removeHUD
{
    if (progressHUD_)
    {
        [progressHUD_ removeFromSuperview];
        progressHUD_ = nil;
    }
}

+ (void)clickProgressHUDDefaultOpetation {
    [progressHUD_ addGestureRecognizer:[[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(removeHUD)]];
}

+ (void)backgroundColorBlack
{
    progressHUD_.bezelView.style = MBProgressHUDBackgroundStyleSolidColor;
    progressHUD_.bezelView.color = [UIColor blackColor];
    progressHUD_.contentColor = [UIColor whiteColor];
}


+ (void)showAnimateForInterval:(NSUInteger)interval{
    [progressHUD_ showAnimated:YES whileExecutingBlock:^{
        sleep(interval);
    } completionBlock:^{
        [MBProgressHUD removeHUD];
    }];
    
    [self clickProgressHUDDefaultOpetation];
}

+ (void)showMessage:(NSString *)message aboveView:(UIView *)view
{
    if (progressHUD_ == nil)
    {
        progressHUD_ = [[MBProgressHUD alloc] initWithView:view];
        [view addSubview:progressHUD_];
        progressHUD_.label.text = message;
        progressHUD_.label.numberOfLines = 0;
        progressHUD_.mode = MBProgressHUDModeText;
        [MBProgressHUD backgroundColorBlack];
        
        [MBProgressHUD showAnimateForInterval:2];
    }
}

+ (void)showMessage:(NSString *)message{
    [self showMessage:message interval:2];
}

+ (void)showMessage:(NSString *)message interval:(NSUInteger)interval{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.detailsLabel.text = message;
        progressHUD_.detailsLabel.numberOfLines = 0;
        progressHUD_.detailsLabel.font = [UIFont systemFontOfSize:17];
        progressHUD_.mode = MBProgressHUDModeText;
        [MBProgressHUD backgroundColorBlack];
        
        [MBProgressHUD showAnimateForInterval:interval];
    }
}

+ (void)showSuccess:(NSString *)success{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.label.text = success;
        progressHUD_.mode = MBProgressHUDModeText;
        progressHUD_.label.numberOfLines = 0;
        progressHUD_.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"success@3x"]];
        
        [MBProgressHUD showAnimateForInterval:2];
    }
}

+ (void)showError:(NSString *)error{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.label.text = error;
        progressHUD_.label.numberOfLines = 0;
        progressHUD_.mode = MBProgressHUDModeText;
        progressHUD_.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"error@3x"]];
        
        [MBProgressHUD showAnimateForInterval:2];
    }
}

+ (void)showIndeterminateAboveView:(UIView *)view {
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:view];
        [view addSubview:progressHUD_];
        progressHUD_.mode = MBProgressHUDModeIndeterminate;
        [progressHUD_ showAnimated:YES];
    }
}

+ (void)showIndeterminate
{
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.mode = MBProgressHUDModeIndeterminate;
        [progressHUD_ showAnimated:YES];
        
        [self clickProgressHUDDefaultOpetation];
    }
}

@end

@implementation MBProgressHUD (progressHUD_2)

+ (void)showMessage:(NSString *)message aboveView:(UIView *)view showTime:(CGFloat)time
{
    if (progressHUD_ == nil)
    {
        progressHUD_ = [[MBProgressHUD alloc] initWithView:view];
        [view addSubview:progressHUD_];
        progressHUD_.label.text = message;
        progressHUD_.mode = MBProgressHUDModeText;
        
        [self showAnimateForInterval:time];
    }
}

+ (void)showMessage:(NSString *)message showTime:(CGFloat)time{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.detailsLabel.text = message;
        progressHUD_.detailsLabel.font = [UIFont systemFontOfSize:17];
        progressHUD_.mode = MBProgressHUDModeText;
        
        [self showAnimateForInterval:time];
    }
}

+ (void)showSuccess:(NSString *)success showTime:(CGFloat)time{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.label.text = success;
        progressHUD_.mode = MBProgressHUDModeText;
        
        progressHUD_.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"success@3x"]];
        
        [self showAnimateForInterval:time];
    }
}

+ (void)showError:(NSString *)error showTime:(CGFloat)time{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:[UIApplication sharedApplication].keyWindow];
        [[UIApplication sharedApplication].keyWindow addSubview:progressHUD_];
        progressHUD_.label.text= error;
        progressHUD_.mode = MBProgressHUDModeText;
        
        progressHUD_.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"error@3x"]];
        
        [self showAnimateForInterval:time];
    }
}

+ (void)showIndeterminateAboveView:(UIView *)view showTime:(CGFloat)time{
    
    if (progressHUD_ == nil) {
        
        progressHUD_ = [[MBProgressHUD alloc] initWithView:view];
        [view addSubview:progressHUD_];
        progressHUD_.mode = MBProgressHUDModeIndeterminate;
        [progressHUD_ showAnimated:YES];
    }
}

@end
