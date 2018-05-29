////
////  SecondViewController.m
////  TestNativeInRN
////
////  Created by soho on 2018/5/17.
////  Copyright © 2018年 soho. All rights reserved.
////
//
//#import "SecondViewController.h"
//
//@interface SecondViewController ()
//
//@end
//
//@implementation SecondViewController
//
//- (void)viewDidLoad {
//    [super viewDidLoad];
//    // Do any additional setup after loading the view, typically from a nib.
//}
//
//
//- (void)didReceiveMemoryWarning {
//    [super didReceiveMemoryWarning];
//    // Dispose of any resources that can be recreated.
//}
//
//
//@end
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "SecondViewController.h"
//
@interface SecondViewController ()
//
@end
@implementation SecondViewController
    - (void)viewDidLoad {
        [super viewDidLoad];
        NSURL *jsCodeLocation;
        
        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
        
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                            moduleName:@"mycrudeoil"
                                                     initialProperties:nil
                                                         launchOptions:nil];
        rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
        UIViewController *vc = [[UIViewController alloc] init];
        vc.view = rootView;
        [self presentViewController:vc animated:YES completion:nil];
//        self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//        UIViewController *rootViewController = [UIViewController new];
//        rootViewController.view = rootView;
//        self.window.rootViewController = rootViewController;
//        [self.window makeKeyAndVisible];
//        return YES;
        // Do any additional setup after loading the view, typically from a nib.
    }
//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//{
//    NSURL *jsCodeLocation;
//
//    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//
//    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                        moduleName:@"mycrudeoil"
//                                                 initialProperties:nil
//                                                     launchOptions:launchOptions];
//    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
//
//    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//    UIViewController *rootViewController = [UIViewController new];
//    rootViewController.view = rootView;
//    self.window.rootViewController = rootViewController;
//    [self.window makeKeyAndVisible];
//    return YES;
//}

@end
