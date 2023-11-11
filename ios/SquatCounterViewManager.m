#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(SquatCounterViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(onSquat, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onText, RCTDirectEventBlock)
RCT_EXTERN_METHOD(updateFromManager:(nonnull NSNumber *)node)

@end
