/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React, { useContext, useRef, useEffect } from 'react'
import { SpaceVertical, Text } from '@looker/components'
import { ExtensionContext40 } from '@looker/extension-sdk-react'

export const DashboardTile: React.FC = () => {
  const renderRef = useRef(null)
  const { extensionSDK } = useContext(ExtensionContext40)

  useEffect(() => {
    if (renderRef.current) {
      extensionSDK.rendered()
    }
  }, [renderRef.current, extensionSDK])

  return (
    <SpaceVertical p="xxxxxlarge" width="100%" height="50vh" around>
      <Text p="xxxxxlarge" fontSize="xxxxxlarge">
        Dashboard Tile
      </Text>
      <pre ref={renderRef}>{JSON.stringify({ hello: 'world' }, null, 2)}</pre>
    </SpaceVertical>
  )
}
