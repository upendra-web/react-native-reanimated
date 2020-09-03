#pragma once

#include <stdio.h>
#include "Scheduler.h"
#import <ReactCommon/CallInvoker.h>
#import <React/RCTUIManager.h>

namespace reanimated
{

using namespace facebook;
using namespace react;

class REAIOSScheduler : public Scheduler {
  public:
  REAIOSScheduler(std::shared_ptr<CallInvoker> jsInvoker, RCTUIManager *uiManager);
  void scheduleOnUI(std::function<void()> job) override;
  virtual ~REAIOSScheduler();
  
  private:
  RCTUIManager *uiManager;
};

} // namespace reanimated