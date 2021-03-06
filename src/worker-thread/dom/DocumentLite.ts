/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PostMessage } from '../worker-thread';
import { Phase } from '../../transfer/Phase';
import { TransferrableKeys } from '../../transfer/TransferrableKeys';
import { set as setPhase } from '../phase';
import { WorkerNoDOMGlobalScope } from '../WorkerDOMGlobalScope';

/**
 * A lightweight Document stub for the no-dom amp binary.
 */
export class DocumentStub {
  // Internal variables.
  public defaultView: WorkerNoDOMGlobalScope;
  public postMessage: PostMessage;
  public addGlobalEventListener: Function;
  public removeGlobalEventListener: Function;
  public [TransferrableKeys.allowTransfer]: boolean = true;
  public [TransferrableKeys.index]: number = -1;

  constructor() {
    this.defaultView = { document: this };
  }

  public [TransferrableKeys.observe](): void {
    setPhase(Phase.Mutating);
  }
}
